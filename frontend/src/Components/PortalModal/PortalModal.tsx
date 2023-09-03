import {FC, ReactNode} from "react";
import BackDropPortal from "../BackDropPortal/BackDropPortal";
import {AnimatePresence} from "framer-motion";

type PortalModalProps = {
    children: ReactNode;
    onClose: () => void;
    visible?: boolean;
}
const PortalModal: FC<PortalModalProps> = ({children, visible, onClose}) => {

    return (
        <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
        >
            {visible && <BackDropPortal onClick={() => onClose()}>
                {children}
            </BackDropPortal>
            }
        </AnimatePresence>
    );
}

export default PortalModal;
