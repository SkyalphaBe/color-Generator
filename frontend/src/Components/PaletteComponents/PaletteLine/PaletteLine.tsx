import React from "react";
import "./PaletteLine.scss";

function PaletteLine(props: {name: string,nbColor:number,date: string }) {
    return (
        <div className={"paletteLine"}>
            <div className={"paletteLine__name"}>Name : {props.name}</div>
            <div className={"paletteLine__nbColor"}>Nb color : {props.nbColor}</div>
            <div className={"paletteLine__date"}>Date : {props.date}</div>
        </div>
    );
}
export default PaletteLine;