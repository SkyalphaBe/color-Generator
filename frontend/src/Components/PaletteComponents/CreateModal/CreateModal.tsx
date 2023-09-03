import {ChangeEvent, FC, useState} from "react";
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

type CreateModalProps = {
    onClose: () => void;
    onCreated: (pal:palettePropsCreate) => void;
}

const CreateModal: FC<CreateModalProps> = ({onClose,onCreated}) => {

    const [paletteName, setPaletteName] = useState<palettePropsCreate>({name: ""});
    const handleChangePalette = (e: ChangeEvent<HTMLInputElement>) => {
        setPaletteName({name: e.target.value});
    }

    const handleCreatePalette = () => {
        onCreated(paletteName);
        onClose();
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
                <button className={"btnCancel"} onClick={onClose}>Cancel</button>
                <button className={"btnCreate"} onClick={handleCreatePalette}>Create</button>
            </div>
        </motion.div>
    );
}

export default CreateModal;
