import React, {useEffect, useState} from "react";
import "./HomeFragment.scss";
import {generateColor} from "../../../Utils/Utils";


function HomeFragment(){
    const[colorHome,setColorHome]=useState<string>(generateColor)

    useEffect(():void=>{
        let firstColor:string = generateColor()
        let background:HTMLDivElement|null = document.querySelector(".home")
        let divColor:HTMLDivElement|null = document.querySelector(".lineBoxColor")
        let inputColor:HTMLInputElement|null = document.querySelector("input[type='text']")

        if (background !== null && divColor !== null && inputColor !== null ){
            background.style.backgroundColor=firstColor
            background.style.transition="2s all"
            divColor.style.backgroundColor=firstColor
            divColor.style.transition="2s all"
            inputColor.value=firstColor
        }
    },[])
    const handleClickColor = ():void=>{
        setColorHome(generateColor)
        let background:HTMLDivElement|null = document.querySelector(".home")
        let divColor:HTMLDivElement|null = document.querySelector(".lineBoxColor")
        let inputColor:HTMLInputElement|null = document.querySelector("input[type='text']")

        if (background !== null && divColor !== null && inputColor !== null ){
            background.style.backgroundColor=colorHome
            background.style.transition="2s all"
            divColor.style.backgroundColor=colorHome
            divColor.style.transition="2s all"
            inputColor.value=colorHome
        }
    }

    return (
        <div className={"HomeFragment"}>
            <div className={"inputColor"}>
                <div className={"lineBoxColor"}></div>
                <input type="text"/>
            </div>
            <div className={"buttonBox"}>
               <button onClick={()=>handleClickColor()}>Change color</button>
               <button>Save Color</button>
            </div>
        </div>
    );
}

export default HomeFragment;