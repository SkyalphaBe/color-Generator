import React, {useEffect} from "react";
import "./Palette.scss";
import PaletteLine from "../../Components/PaletteComponents/PaletteLine/PaletteLine";
import PortalModal from "../../Components/PortalModal/PortalModal";
import {PaletteProps} from "../../utils/type";

function Palette(){
    const [contentState, setContentState] = React.useState<boolean>(false);
    const [palette, setPalette] = React.useState<Array<PaletteProps>>([]);
    const [oldPalette, setOldPalette] = React.useState<number>(); // [
    const fetchData = (url: RequestInfo | URL) => fetch(url).then(res => res.json());
    const handleCallback = (childData: number) => {
        setOldPalette(childData);
    }

    useEffect(() => {
        fetchData("http://localhost:8080/api/palettes")
            .then(data => {
                if (data.length > 0) {
                    setContentState(true);
                    setPalette(data);
                }
            }
        );
    }, []);

    useEffect(() => {
        let newPalette = palette.filter((palette: PaletteProps) => palette.id !== oldPalette);
        setPalette(newPalette)
    }, [oldPalette]);

    return (
        <div className={"palette"}>
            <div className={"menu"}>
                {contentState ?
                    <div className={"content"}>
                        {palette.map((palette: PaletteProps) => <PaletteLine key={palette.id} id={palette.id} name={palette.name} nbColor={0} parentCallback={handleCallback}/>)}
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
