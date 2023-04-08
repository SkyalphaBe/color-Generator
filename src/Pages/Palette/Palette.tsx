import React from "react";
import "./Palette.scss";
import PaletteLine from "../../Components/PaletteComponents/PaletteLine";

function Palette(){
    const [contentState, setContentState] = React.useState<boolean>(true);
    return (
        <div className={"palette"}>
            <div className={"menu"}>
                {contentState ?
                    <div className={"content"}>
                        <PaletteLine name={"palette 1"} nbColor={6} date={"08/04/23"}/>
                    </div>
                    :
                    <h1>There is no color-palette for the moment :( </h1>}
                <button className={"btnNew"}>+</button>
            </div>
        </div>
    );
}

export default Palette;