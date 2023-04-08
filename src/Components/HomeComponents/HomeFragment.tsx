import React, {useEffect, useState} from "react";
import "./HomeFragment.scss";
import {generateColor} from "../../Utils/Utils";


function HomeFragment(props:{"parentNode":HTMLDivElement|null}){
    const[colorHome,setColorHome]=useState<string>(generateColor);

    useEffect(()=>{
        if (props.parentNode){
            props.parentNode.style.backgroundColor = colorHome;
        }
    },[colorHome])
    const handleClickColor = ():void=>{
        setColorHome(generateColor)
    }

    return (
        <div className={"HomeFragment"}>
            <div className={"inputColor"}>
                <div className={"lineBoxColor"} style={{backgroundColor:colorHome}}></div>
                <input type="text" value={colorHome}/>
            </div>
            <div className={"buttonBox"}>
               <button onClick={()=>handleClickColor()}>Change color</button>
               <button>Save Color</button>
            </div>
        </div>
    );
}

export default HomeFragment;