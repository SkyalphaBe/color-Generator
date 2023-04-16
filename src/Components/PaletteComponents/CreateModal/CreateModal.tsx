import React from "react";
import "./CreateModal.scss";
import {motion} from "framer-motion";

const dropIn = {
    hidden:{
        y:"-100vh",
        opacity:0
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            duration:0.1,
            type:"spring",
            damping:25,
            stiffness:500
        }
    },
    exit:{
        y:"100vh",
        opacity:0
    }
}

function CreateModal(props:{onClose:()=>void}){
    return(
        <motion.div className={"modal"}
            onClick={(e)=>e.stopPropagation()}
            variants={dropIn}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
        >
            <h1 className={"modal__title"}>New color palette</h1>
            <div className={"modal__name"}>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" name="name"/>
            </div>
            <div className={"modal__btn"}>
                <button className={"btnCancel"} onClick={props.onClose}>Cancel</button>
                <button className={"btnCreate"}>Create</button>
            </div>
        </motion.div>
    );
}

export default CreateModal;