import React from "react";
import "./CreateModal.scss";
import {createPortal} from "react-dom";

function CreateModal(props:{onClose:()=>void}){
    return createPortal(
        <div className={"createModal"}>
            <div className={"createModal__content"}>
                <h1 className={"createModal__content__title"}>New color palette</h1>
                <div className={"createModal__content__name"}>
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className={"createModal__content__btn"}>
                    <button className={"btnCancel"} onClick={props.onClose}>Cancel</button>
                    <button className={"btnCreate"}>Create</button>
                </div>
            </div>
        </div>
    ,document.body);
}

export default CreateModal;