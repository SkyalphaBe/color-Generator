import React from "react";
import "./PaletteLine.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {PaletteProps} from "../../../utils/type";
import Color from "../Color/Color";


function PaletteLine(props: { palette: PaletteProps, parentCallback: (childData: number) => void }) {

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
    const sendDataParent = (id: number) => {
        deletePalette(id);
        props.parentCallback(id);
    }

    return (
        <div className={"paletteLine"}>
            <h3 className={"paletteLine__name"}>{props.palette.name.toUpperCase()}</h3>
            <div className={"paletteLine__colors"}>
                {props.palette.colors.map((color, index) => <Color color={color} key={index}/>)}
            </div>
            <div className={"paletteLine__actions"}>
                <div className={"btnClass"}>
                    <button><FontAwesomeIcon icon={faPenToSquare}/></button>
                    <button onClick={() => sendDataParent(props.palette.id)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
                <h4 className={"paletteLine__nbColor"}>color : {props.palette.colors.length}</h4>
            </div>
        </div>
    );
}

export default PaletteLine;
