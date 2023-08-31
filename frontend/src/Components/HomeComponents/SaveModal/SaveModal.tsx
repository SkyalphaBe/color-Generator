import {useEffect, useState} from "react";
import "./SaveModal.scss";
import {PaletteProps} from "../../../utils/type";
import SmallPalette from "../SmallPalette/SmallPalette";

import {motion} from "framer-motion";

const dropIn = {
    hidden:{
        y:"-100vh",
        opacity:0
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            duration:0.1,
            type:"spring",
            damping:25,
            stiffness:500
        }
    },
    exit:{
        y:"100vh",
        opacity:0
    }
}

function SaveModal(props:{onClose:()=>void,color:string}) {

    const [paletteList, setPaletteList] = useState<Array<PaletteProps>>([]);

    const setSelected = (id:number) => {
        setPaletteList(paletteList.map((palette:PaletteProps) => {
            if (palette.id === id) {
                palette.selected = !palette.selected;
                console.log(palette.selected)
            }
            return palette;
        }));
    }

    const addColorToPalettes = async (color:string) => {

        const updatePalettes =  paletteList.map(async (palette:PaletteProps) => {
            if (!palette.selected) return;
            const response:Response = await fetch("http://localhost:8080/api/colors/create", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: color,
                    paletteId: palette.id
                })
            });
            return await response.json()
        });
        const results = await Promise.all(updatePalettes);
        console.log("Results:", results);
    };

    useEffect(() => {
        fetch("http://localhost:8080/api/palettes")
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setPaletteList(data);
                }
            }
        );
    }, []);

    return (
        <motion.div className={"modal"}
                    onClick={(e)=>e.stopPropagation()}
                    variants={dropIn}
                    initial={"hidden"}
                    animate={"visible"}
                    exit={"exit"}
        >
            <div className={"SaveModal"}>
                <h1>Save Color</h1>
                {paletteList.length > 0 ?
                    <div className={"paletteList"}>
                        {paletteList.map((palette) => <SmallPalette key={palette.id} palette={palette} setSelected={()=>setSelected(palette.id)} />)}
                    </div>
                    :
                    <h2>There is no color-palette for the moment :( </h2>
                }
                <div className={"buttonBox"}>
                    <button onClick={props.onClose}>Cancel</button>
                    <button onClick={()=>addColorToPalettes(props.color).then(props.onClose)}>Save</button>
                </div>
            </div>
        </motion.div>

    );
}

export default SaveModal;
