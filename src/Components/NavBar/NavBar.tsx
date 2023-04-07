import React from "react";
import {NavLink} from "react-router-dom";
function NavBar() {
    return (
        <div className={"navBar"}>
            <h1>Color Generator</h1>
            <div className={"navBar__logo"}>
                <NavLink to={"/"}>
                    <h2>Home</h2>
                </NavLink>
                <NavLink to={"/colorPalette"}>
                    <h2>Color Palette</h2>
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;