import React from "react";
import CreateModal from "../PaletteComponents/CreateModal/CreateModal";
import BackDropPortal from "../BackDropPortal/BackDropPortal";
import {AnimatePresence} from "framer-motion";

function PortalModal(){

    const [showModal, setShowModal] = React.useState<boolean>(false);

    return (
        <>
            <button className={"btnNew"} onClick={()=>setShowModal(true)}>
                +
            </button>
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {showModal && <BackDropPortal onClick={()=>setShowModal(false)}>
                    <CreateModal onClose={()=>setShowModal(false)}/>
                </BackDropPortal>
                }
            </AnimatePresence>
        </>
    );
}

export default PortalModal;