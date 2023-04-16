import React from "react";
import CreateModal from "../PaletteComponents/CreateModal/CreateModal";
import BackDropPortal from "../BackDropPortal/BackDropPortal";

function PortalModal(){

    const [showModal, setShowModal] = React.useState<boolean>(false);

    return (
        <>
            <button className={"btnNew"} onClick={()=>setShowModal(true)}>
                +
            </button>
            {showModal && <BackDropPortal>
                <CreateModal onClose={()=>setShowModal(false)}/>
            </BackDropPortal>
            }
        </>
    );
}

export default PortalModal;