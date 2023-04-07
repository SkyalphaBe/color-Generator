import React, {useState} from "react";
import "./Home.scss";
import HomeFragment from "./HomeComponents/HomeFragment";

function Home() {

    const [homeStat,setHomeStat] = useState<boolean>(true);

    return (
        <div className={"home"}>
            <div className={"menu"}>
                <h1>Start generating !</h1>
                <div className={"wrapFragment"}>
                    {homeStat ?
                        <div>
                            <button onClick={()=>setHomeStat(false)}>Generate Color</button>
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