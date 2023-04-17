import React, {ReactNode} from "react";
import {motion} from "framer-motion";
import {createPortal} from "react-dom";
import "./BackDropPortal.scss";

type BackDropProps = {
    children:ReactNode;
    onClick:()=>void;
}
function BackDropPortal(props:BackDropProps) {

    return createPortal(
        <motion.div className="backdrop"
            onClick={props.onClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            {props.children}
        </motion.div>,
        document.body
    )
}

export default BackDropPortal;