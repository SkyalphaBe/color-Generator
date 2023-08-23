import React from "react";
import "./PaletteLine.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";


function PaletteLine(props: {id:number,name: String,nbColor:number,parentCallback: (childData: number) => void}) {

    const deletePalette = (id: number) => {
        fetch("http://localhost:8080/api/palettes/delete/" + id, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                props.parentCallback(id);
            })
            .catch(error => {
                console.error("Error parsing JSON:", error);
            });
    }
    const sendDataParent = (id:number) => {
        deletePalette(id);
        props.parentCallback(id);
    }

    return (
        <div className={"paletteLine"} onClick={()=>sendDataParent(props.id)}>
            <h3 className={"paletteLine__name"}>{props.name.toUpperCase()}</h3>
            <div className={"bottomCard"}>
                <div className={"btnClass"}>
                    <button><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button><FontAwesomeIcon icon={faTrash} /></button>
                </div>
                <h4 className={"paletteLine__nbColor"}>color : {props.nbColor}</h4>
            </div>
        </div>
    );
}
export default PaletteLine;
