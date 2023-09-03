import {FC, useEffect, useState} from "react";
import "./Palette.scss";
import PaletteLine from "../../Components/PaletteComponents/PaletteLine/PaletteLine";
import PortalModal from "../../Components/PortalModal/PortalModal";
import {PaletteProps, palettePropsCreate} from "../../utils/type";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fetchData} from "../../utils/service";
import MulticolorBG from "../../Components/PaletteComponents/MultiColorBG/MulticolorBG";
import CreateModal from "../../Components/PaletteComponents/CreateModal/CreateModal";

library.add(fas)

const Palette: FC = () => {
    const [palettes, setPalettes] = useState<PaletteProps[]>([]);
    const [showModal, setShowModal] = useState(false);

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
                                                                    onDelete={() => deletePalette(palette.id)}/>)
    }

    return (
        <MulticolorBG>
            <div className={"menu"}>
                <button className={"btnNew"} onClick={() => setShowModal(true)}>+</button>
                <div className={"content"}>
                    {generateContent()}
                </div>
                <PortalModal visible={showModal} onClose={() => setShowModal(false)}>
                    <CreateModal onCreated={addPalette} onClose={() => setShowModal(false)}/>
                </PortalModal>
            </div>
        </MulticolorBG>
    );
}

export default Palette;
