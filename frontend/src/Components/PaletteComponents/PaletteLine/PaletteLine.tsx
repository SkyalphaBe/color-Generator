import {FC} from "react";
import "./PaletteLine.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {PaletteProps} from "../../../utils/type";
import Color from "../Color/Color";

type PaletteLineProps = {
    palette: PaletteProps;
    onDelete: () => void;
}
const PaletteLine: FC<PaletteLineProps> = ({palette, onDelete}) => {

    return (
        <div className={"paletteLine"}>
            <h3 className={"paletteLine__name"}>{palette.name.toUpperCase()}</h3>
            <div className={"paletteLine__colors"}>
                {palette.colors.map((color, index) => <Color color={color} key={index}/>)}
            </div>
            <div className={"paletteLine__actions"}>
                <div className={"btnClass"}>
                    <button><FontAwesomeIcon icon={faPenToSquare}/></button>
                    <button onClick={onDelete}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
                <h4 className={"paletteLine__nbColor"}>color : {palette.colors.length}</h4>
            </div>
        </div>
    );
}

export default PaletteLine;
