import {useState} from "react";
import "./CreateModal.scss";
import {motion} from "framer-motion";
import {palettePropsCreate} from "../../../utils/type";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

function CreateModal(props: { onClose: () => void }) {

    const [paletteName, setPaletteName] = useState("")
    const handleChangePalette = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaletteName(e.target.value)
    }

    async function addPalette(): Promise<void> {
        const palette: palettePropsCreate = {
            name: paletteName,
            nbColor: 0
        }
        const RawResponse: Response = await fetch("http://localhost:8080/api/palettes/create", {
            method: "POST",
            headers: {
                'Accept': 'text/plain',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(palette)
        });
        const content: void = await RawResponse.json()
            .then((data): void => {
                setPaletteName(data.id)
            })
        console.log(content);
    }

    return (
        <motion.div className={"modal"}
                    onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                    initial={"hidden"}
                    animate={"visible"}
                    exit={"exit"}
        >
            <h1 className={"modal__title"}>New color palette</h1>
            <div className={"modal__name"}>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" name="name" onChange={handleChangePalette}/>
            </div>
            <div className={"modal__btn"}>
                <button className={"btnCancel"} onClick={props.onClose}>Cancel</button>
                <button className={"btnCreate"} onClick={addPalette}>Create</button>
            </div>
        </motion.div>
    );
}

export default CreateModal;
