import React from "react";
import {createPortal} from "react-dom";
import CreateModal from "../PaletteComponents/CreateModal/CreateModal";

function PortalModal(){

    const [showModal, setShowModal] = React.useState<boolean>(false);

    return (
        <>
            <button className={"btnNew"} onClick={()=>setShowModal(true)}>
                +
            </button>
            {showModal && createPortal(
                <CreateModal onClose={()=>setShowModal(false)}/>
            ,document.body)}
        </>
    );
}

export default PortalModal;