import React, {ReactNode} from "react";
import {createPortal} from "react-dom";
import "./BackDropPortal.scss";

type BackDropProps = {
    children:ReactNode;
}
function BackDropPortal(props:BackDropProps) {

    return createPortal(
        <div className="backdrop">
            {props.children}
        </div>,
        document.body
    )
}

export default BackDropPortal;