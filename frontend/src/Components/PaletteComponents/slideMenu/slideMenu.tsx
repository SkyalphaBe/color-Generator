import {ChangeEvent, FC, useState} from "react";
import "./slideMenu.scss"
import {generateColor} from "../../../utils/utils";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type slideMenuProps = {
    changeColor: (color: string | undefined) => void;
    saveColor: (color: string) => void;

}

const slideMenu: FC<slideMenuProps> = ({changeColor, saveColor}) => {
    const [color, setColor] = useState(generateColor().slice(1));
    const [showMenu, setShowMenu] = useState(false);

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

    const onSaveColor = () => {
        saveColor(`#${color}`);
    }

    const closeMenu = () => {
        changeColor(undefined)
    }

    const handleClickMenu = ()=>{
        setShowMenu(!showMenu);
        if (showMenu) closeMenu();
    }

    return (
        <div className={'slide '+ (showMenu ? '__Open' : '__Close')}>
            <div className={"contentSlide"}>
                <span>#<input className={'colorInput'} value={color} onChange={handleChange} type="text" maxLength={6}/></span>
                <div className={'btnClass'}>
                    <button onClick={onSaveColor}>Save</button>
                    <button onClick={onChangeColor}>Change</button>
                </div>
            </div>
            <div className={"arrow"} onClick={handleClickMenu}><FontAwesomeIcon icon={faArrowDown}/></div>
        </div>
    );
}

export default slideMenu;
