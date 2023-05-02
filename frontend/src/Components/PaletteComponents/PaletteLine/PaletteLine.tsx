import React from "react";
import "./PaletteLine.scss";

function PaletteLine(props: {name: string,nbColor:number }) {
    return (
        <div className={"paletteLine"}>
            <div className={"paletteLine__name"}>Name : {props.name}</div>
            <div className={"paletteLine__nbColor"}>Nb color : {props.nbColor}</div>
        </div>
    );
}
export default PaletteLine;
