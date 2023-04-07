import React from "react";
import "./HomeFragment.scss";


function HomeFragment() {
    return (
        <div className={"HomeFragment"}>
            <div className={"inputColor"}>
                <div className={"lineboxColor"}></div>
                <input type="text"/>
            </div>
           <div className={"buttonBox"}>
               <button>Change color</button>
               <button>Save Color</button>
           </div>
        </div>
    );
}

export default HomeFragment;