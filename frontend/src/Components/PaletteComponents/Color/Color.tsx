import {FC, useState} from "react";
import {colorProps} from "../../../utils/type";
import "./Color.scss"

type props = {
    color: colorProps
}

const Color: FC<props> = ({color}) => {

    const [copy, isCopy] = useState(false);
    const copyColor = async () => {
        isCopy(true);
        await navigator.clipboard.writeText(color.code);
        setTimeout(() => {
            isCopy(false);
        }, 1000);
    }

    return (
        <div onClick={copyColor} className={"color"} style={{backgroundColor: color.code}}>
            {copy && <p>Copied !</p>}
        </div>
    )
}

export default Color;
