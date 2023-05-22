import { useContext } from "react";
import { OverlayContext } from "../contexts/OverlayContext";

const Overlay = () => {
    const { overlay, setOverlay } = useContext(OverlayContext);

    const clicked = () => {
        setOverlay(false);
    }

    return (
        <div className={`bg-black fixed w-full h-screen top-0 left-0 ${overlay ? "opacity-80 z-10" : "opacity-0 -z-10"}`} onClick={clicked}></div>
    );
}

export default Overlay;