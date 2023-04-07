import React, {useState} from "react";
import "./HomeFragment.scss";

const background:HTMLBodyElement|null = document.querySelector("body")
function randomNumber(maxValue:number):number{
    return Math.floor(Math.random()*maxValue)
}

function generateColor():String{
    let firstNb:number = randomNumber(255)
    let secondeNb:number = randomNumber(255)
    let thirdNb:number = randomNumber(255)

    return "#"+firstNb.toString(16)+secondeNb.toString(16)+thirdNb.toString(16);
}
function HomeFragment() {

    const[colorHome,setColorHome]=useState<String>("")

    const handleClickColor = ():void=>{
        setColorHome(generateColor)
    }

    return (
        <div className={"HomeFragment"}>
            <div className={"inputColor"}>
                <div className={"lineboxColor"}></div>
                <input type="text"/>
            </div>
            <div className={"buttonBox"}>
               <button onClick={()=>{
                   handleClickColor()
                   if (background !== null){
                       background.style.backgroundColor=colorHome.toString()
                   }
               }}>Change color</button>
               <button>Save Color</button>
            </div>
        </div>
    );
}

export default HomeFragment;