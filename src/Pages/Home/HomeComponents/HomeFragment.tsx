import React, {useState} from "react";
import "./HomeFragment.scss";

const background:HTMLBodyElement|null = document.querySelector("body")
function randomNumber(maxValue:number):number{
    return Math.floor(Math.random()*maxValue)
}

function generateColor():string{
    let firstNb:number = randomNumber(255)
    let secondeNb:number = randomNumber(255)
    let thirdNb:number = randomNumber(255)

    return "#"+firstNb.toString(16)+secondeNb.toString(16)+thirdNb.toString(16);
}
function HomeFragment() {

    const[colorHome,setColorHome]=useState<string>("")

    const handleClickColor = ():void=>{
        setColorHome(generateColor)

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