import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Pages/Home/Home";
import Palette from "../Pages/Palette/Palette";

function Router(){
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/colorPalette"} element={<Palette/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router