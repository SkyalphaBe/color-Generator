import {useEffect, useState} from "react";
import "./Palette.scss";
import PaletteLine from "../../Components/PaletteComponents/PaletteLine/PaletteLine";
import PortalModal from "../../Components/PortalModal/PortalModal";
import {PaletteProps} from "../../utils/type";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fetchData} from "../../utils/service";
import MulticolorBG from "../../Components/PaletteComponents/MultiColorBG/MulticolorBG";

library.add(fas)

function Palette() {
    const [palettes, setPalettes] = useState<PaletteProps[]>([]);

    useEffect(() => {
        const initData = async () => {
            try {
                const url = `${import.meta.env.VITE_DOMAIN_NAME}/api/palettes`;
                const data = await fetchData<PaletteProps[]>(url);
                setPalettes(data);
            } catch (e) {
                console.log(e);
            }
        }
        initData();
    }, []);

    const deletePalette = async (id: number) => {
        const url = `${import.meta.env.VITE_DOMAIN_NAME}/api/palettes/delete/${id}`;
        await fetchData(url, "delete")
        const newPalettes = palettes.filter((palette: PaletteProps) => palette.id !== id);
        setPalettes(newPalettes);
    }
    const generateContent = () => {
        if(palettes.length === 0) {
            return <h1>No content for the moment :(</h1>
        }
        return palettes.map((palette: PaletteProps) => <PaletteLine key={palette.id} palette={palette} onDelete={()=>deletePalette(palette.id)}/>)
    }

    return (
        <MulticolorBG>
            <div className={"menu"}>
                <div className={"content"}>
                    {generateContent()}
                </div>
                <PortalModal/>
            </div>
        </MulticolorBG>
    );
}

export default Palette;
