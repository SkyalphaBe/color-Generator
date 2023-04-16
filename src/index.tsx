import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Layout/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Palette from "./Pages/Palette/Palette";

const root = document.querySelector("#root");
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <div>404</div>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/color-palette",
                element: <Palette/>
            }
        ]
    }
]);

if(!root){
    throw new Error ("no root element find");
}

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);