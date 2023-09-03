import {FC, ReactNode, useEffect, useRef, useState} from "react";
import "./MulticolorBG.scss";
import {generateColor} from "../../../utils/utils";

type MulticolorBGProps = {
    children: ReactNode;
    color?: string;
}

const MulticolorBG: FC<MulticolorBGProps> = ({children, color}) => {

    const [bgColor, setBgColor] = useState("#FFF");
    const intervalRef = useRef<NodeJS.Timer>();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setBgColor(generateColor());
        }, 1500);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])

    const currentColor = !!color ? color : bgColor;

    return (
        <div style={{backgroundColor: currentColor}} className={"multicolor-bg"}>
            {children}
        </div>
    )
}

export default MulticolorBG;
