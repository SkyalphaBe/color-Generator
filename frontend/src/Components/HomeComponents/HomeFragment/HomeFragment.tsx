import  {useEffect, useState} from "react";
import "./HomeFragment.scss";
import {generateColor, randomSentences} from "../../../utils/utils";
import BackDropPortal from "../../BackDropPortal/BackDropPortal";
import {AnimatePresence} from "framer-motion";
import SaveModal from "../SaveModal/SaveModal";


function HomeFragment(props:{"parentNode":HTMLDivElement|null,"parentTitle":HTMLHeadingElement|null}) {
    const[colorHome,setColorHome] = useState<string>(generateColor().slice(1));
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(()=>{
        if (props.parentNode){
            props.parentNode.style.backgroundColor = `#${colorHome}`;
        }
    },[colorHome])
    const handleClickColor = ():void=>{
        setColorHome(generateColor().slice(1))
        if (props.parentTitle) props.parentTitle.textContent = randomSentences();
    }

    const setCustomColor = (color:string):void=>{
        const newColor  = color.toUpperCase();
        if (/^[0-9A-F]*$/g.test(newColor)){
            setColorHome(newColor);
        } else {
            alert("Invalid color code");
        }
    }

    return (
        <div className={"HomeFragment"}>
            <div className={"inputColor"}>
                <div className={"lineBoxColor"} style={{backgroundColor:`#${colorHome}`}}></div>
                <span className={"inputBox"}>
                    <span>#</span>
                    <input type="text" onChange={(e) => setCustomColor(e.target.value)} value={colorHome} maxLength={6} />
                </span>
            </div>
            <div className={"buttonBox"}>
               <button onClick={()=>handleClickColor()}>Change color</button>
               <button onClick={()=>setShowModal(true)}>Save Color</button>
                <AnimatePresence
                    initial={false}
                    mode="wait"
                    onExitComplete={() => null}
                >
                    {showModal && <BackDropPortal onClick={()=>setShowModal(false)}>
                        <SaveModal onClose={()=>setShowModal(false)}/>
                    </BackDropPortal>
                    }
                </AnimatePresence>
            </div>
        </div>
    );
}

export default HomeFragment;
