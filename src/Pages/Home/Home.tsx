import React, {useEffect, useRef, useState} from "react";
import "./Home.scss";
import HomeFragment from "../../Components/HomeComponents/HomeFragment";
import {generateColor} from "../../Utils/Utils";

function Home() {

    const [homeStat,setHomeStat] = useState<boolean>(true);
    const [color,setColor] = useState<string>("");
    const intervalRef = useRef<number>();
    const homeRef = useRef<HTMLDivElement>(null);

    const handleStop = ():void => {
        clearInterval(intervalRef.current);
    }

    useEffect(()=>{
        clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(()=>{
            setColor(generateColor());
        },1500);
        return ():void =>{
            clearInterval(intervalRef.current);
        }
    },[])

    return (
        <div className={"home"} style={{backgroundColor:color}} ref={homeRef}>
            <div className={"menu"}>
                <h1>Start generating !</h1>
                <div className={"wrapFragment"}>
                    {homeStat ?
                        <div>
                            <button onClick={()=>{
                                setHomeStat(false);
                                handleStop();
                            }}>Generate Color</button>
                        </div>
                        :
                        <HomeFragment parentNode={homeRef.current}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;