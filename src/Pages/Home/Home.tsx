import React, {useState} from "react";
import "./Home.scss";
import HomeFragment from "./HomeComponents/HomeFragment";
import {generateColor} from "../../Utils/Utils";


let time:NodeJS.Timer = setInterval(():void=>{
    let background:HTMLDivElement|null = document.querySelector(".home")
    let color:string = generateColor()
    if (background !== null){
        background.style.backgroundColor = color
        background.style.transition="2s all"
    }
},1500);

function Home() {

    const [homeStat,setHomeStat] = useState<boolean>(true);

    return (
        <div className={"home"}>
            <div className={"menu"}>
                <h1>Start generating !</h1>
                <div className={"wrapFragment"}>
                    {homeStat ?
                        <div>
                            <button onClick={()=>{
                                setHomeStat(false)
                                clearInterval(time)
                            }}>Generate Color</button>
                        </div>
                        :
                        <HomeFragment/>
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;