import React from "react";
import "./PaletteLine.scss";

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
            <div className={"paletteLine__name"}>Name : {props.name}</div>
            <div className={"paletteLine__nbColor"}>Nb color : {props.nbColor}</div>
        </div>
    );
}
export default PaletteLine;
