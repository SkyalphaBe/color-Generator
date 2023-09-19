import {ChangeEvent, FC, useState} from "react";
import "./slideMenu.scss"
import {generateColor} from "../../../utils/utils";

type slideMenuProps = {
    changeColor: (color: string|undefined) => void;
    saveColor: (color: string) => void;

}

const slideMenu: FC<slideMenuProps> = ({changeColor, saveColor}) => {
    const [color, setColor] = useState(generateColor().slice(1));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9A-F]$/;
        const value = e.target.value.toUpperCase();
        if (!regex.test(value)) {
            alert("Only hexadecimal characters are allowed");
            return;
        }
        setColor(value);
    }

    const onChangeColor = () => {
        const newColor = generateColor();
        changeColor(newColor);
        setColor(newColor.slice(1));
    }

    const onSaveColor= () => {
        saveColor(`#${color}`);
    }

    const closeMenu = () => {
        changeColor(undefined)
    }

    return (
        <div className={"slide"}>
            <h3>text</h3>
            <span>#<input value={color} onChange={handleChange} type="text" maxLength={6}/></span>
            <button onClick={onSaveColor}>Save</button>
            <button onClick={onChangeColor}>Change</button>
            <button onClick={closeMenu}>Close</button>
        </div>
    );
}

export default slideMenu;
