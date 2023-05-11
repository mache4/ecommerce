import { useContext } from "react";
import { OverlayContext } from "../contexts/OverlayContext";
import { SigninContext } from "../contexts/SigninContext";

const Overlay = () => {
    const { overlay, setOverlay } = useContext(OverlayContext);
    const { setSignin } = useContext(SigninContext);

    const clicked = () => {
        setOverlay(false);
        setSignin(false);
    }

    return (
        <div className={`bg-black fixed w-full h-screen top-0 left-0 ${overlay ? "opacity-80 z-10" : "opacity-0 -z-10"}`} onClick={clicked}></div>
    );
}

export default Overlay;