import {FC, useEffect, useState} from "react";
import "./Palette.scss";
import PaletteLine from "../../Components/PaletteComponents/PaletteLine/PaletteLine";
import PortalModal from "../../Components/PortalModal/PortalModal";
import {colorProps, PaletteProps, palettePropsCreate} from "../../utils/type";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fetchData} from "../../utils/service";
import MulticolorBG from "../../Components/PaletteComponents/MultiColorBG/MulticolorBG";
import CreateModal from "../../Components/PaletteComponents/CreateModal/CreateModal";
import SlideMenu from "../../Components/PaletteComponents/slideMenu/slideMenu";

library.add(fas)

const Palette: FC = () => {
    const [palettes, setPalettes] = useState<PaletteProps[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [color, setColor] = useState<string>();

    useEffect(() => {
        const initData = async () => {
            const url = `${import.meta.env.VITE_DOMAIN_NAME}/api/palettes`;
            const data = await fetchData<PaletteProps[]>(url);
            setPalettes(data);
        }
        initData().catch((e) => console.error(e));
    }, []);

    const deletePalette = async (id: number) => {
        const url = `${import.meta.env.VITE_DOMAIN_NAME}/api/palettes/delete/${id}`;
        await fetchData(url, "delete")
        const newPalettes = palettes.filter((palette: PaletteProps) => palette.id !== id);
        setPalettes(newPalettes);
    }

    const selectPalette = (id: number) => {
        const newPalettes = palettes.map((palette: PaletteProps) => {
            if (palette.id === id) {
                palette.selected = !palette.selected;
            } else {
                palette.selected = false;
            }
            return palette;
        });
        setPalettes(newPalettes);
    }

    const addPalette = async (newPalette: palettePropsCreate) => {
        const url = `${import.meta.env.VITE_DOMAIN_NAME}/api/palettes/create`;
        const response = await fetchData<PaletteProps>(url, "post", newPalette);
        const newPalettes = [...palettes, response];
        setPalettes(newPalettes);
    }

    const generateContent = () => {
        if (palettes.length === 0) {
            return <h1>No content for the moment :(</h1>
        }
        return palettes.map((palette: PaletteProps) => <PaletteLine key={palette.id} palette={palette}
                                                                    setSelectedPalette={() => selectPalette(palette.id)}
                                                                    onDelete={() => deletePalette(palette.id)}/>)
    }

    const saveColor = async (color: string) => {
        const url = `${import.meta.env.VITE_DOMAIN_NAME}/api/colors/create`;
        const newPalettes = [...palettes];
        const promises = [];
        for (let i = 0; i < newPalettes.length; i++) {
            const palette = newPalettes[i];
            const newColor: colorProps = {
                code: color,
                paletteId: palette.id
            };
            if (palette.selected) {
                const response = await fetchData<colorProps>(url, "post", newColor);
                palette.colors.push(response);

            }
        }
        setPalettes(newPalettes);

    }

    const changeBGColor = (color: string | undefined) => {
        setColor(color);
    }

    return (
        <MulticolorBG color={color}>
            <div className={"menu"}>
                <button className={"btnNew"} onClick={() => setShowModal(true)}>+</button>
                <div className={"content"}>
                    {generateContent()}
                </div>
                <PortalModal visible={showModal} onClose={() => setShowModal(false)}>
                    <CreateModal onCreated={addPalette} onClose={() => setShowModal(false)}/>
                </PortalModal>
                <SlideMenu saveColor={saveColor} changeColor={changeBGColor}/>
            </div>
        </MulticolorBG>
    );
}

export default Palette;
