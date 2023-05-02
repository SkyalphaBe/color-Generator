import React, {useEffect} from "react";
import "./Palette.scss";
import PaletteLine from "../../Components/PaletteComponents/PaletteLine/PaletteLine";
import PortalModal from "../../Components/PortalModal/PortalModal";

type PaletteProps = {
    name: string,
    nbColor: number,
}

function Palette(){
    const [contentState, setContentState] = React.useState<boolean>(false);
    const [palette, setPalette] = React.useState<Array<PaletteProps>>([]);
    const fetchData = (url: RequestInfo | URL) => fetch(url).then(res => res.json());

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

    return (
        <div className={"palette"}>
            <div className={"menu"}>
                {contentState ?
                    <div className={"content"}>
                        {palette.map((palette: PaletteProps) => <PaletteLine name={palette.name} nbColor={0}/>)}
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
