import {FC} from "react";
import "./SmallPalette.scss";
import {PaletteProps} from "../../../utils/type";

type SmallPaletteProps = {
    palette:PaletteProps;
    setSelected:()=>void;
}

const SmallPalette : FC<SmallPaletteProps> = ({palette,setSelected}) => {

    return (
        <div className={`SmallPalette ${palette.selected && "SmallPalette--selected" }`} onClick={setSelected}>
            <h4>{palette.name}</h4>
        </div>
    );
};

export default SmallPalette;
