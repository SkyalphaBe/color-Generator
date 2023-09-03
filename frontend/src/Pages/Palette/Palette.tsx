import {useEffect, useRef, useState} from "react";
import "./Palette.scss";
import PaletteLine from "../../Components/PaletteComponents/PaletteLine/PaletteLine";
import PortalModal from "../../Components/PortalModal/PortalModal";
import {PaletteProps} from "../../utils/type";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {generateColor} from "../../utils/utils";
import {fetchData} from "../../utils/service";

library.add(fas)

function Palette(){
    const [contentState, setContentState] = useState(false);
    const [palette, setPalette] = useState<PaletteProps[]>([]);
    const [oldPalette, setOldPalette] = useState<number>();
    const [color,setColor] = useState("");
    const intervalRef = useRef<number>();
    const handleCallback = (childData: number) => {
        setOldPalette(childData);
    }

    useEffect(()=>{
        clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(()=>{
            setColor(generateColor());
        },1500);
        return ():void =>{
            clearInterval(intervalRef.current);
        }
    },[])

    useEffect(() => {
        const initData = async () => {
            try {
                const data = await fetchData<PaletteProps[]>("http://localhost:8080/api/palettes");
                if (data.length > 0) {
                    setContentState(true);
                    setPalette(data);
                }
            } catch (e) {
                console.log(e);
            }
        }
        initData();
    }, []);

    useEffect(() => {
        let newPalette = palette.filter((palette: PaletteProps) => palette.id !== oldPalette);
        setPalette(newPalette)
    }, [oldPalette]);

    return (
        <div className={"palette"} style={{backgroundColor:color}}>
            <div className={"menu"}>
                {contentState ?
                    <div className={"content"}>
                        {palette.map((palette: PaletteProps) => <PaletteLine key={palette.id} palette={palette} parentCallback={handleCallback}/>)}
                    </div>
                    :
                    <h1>There is no color-palette for the moment :( </h1>
                }
                <PortalModal/>
            </div>
        </div>
    );
}

export default Palette;
