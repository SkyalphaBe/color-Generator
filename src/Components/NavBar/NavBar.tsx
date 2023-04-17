import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.scss";
function NavBar() {
    return (
        <div className={"navBar"}>
            <div className={"navBar__content"}>
                <h1>Color Generator</h1>
                <div className={"navBar__content__links"}>
                    <NavLink to={"/"}>
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink to={"/color-palette"}>
                        <h3>Color Palette</h3>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;