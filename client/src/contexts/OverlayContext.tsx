import { createContext } from "react";

export const OverlayContext = createContext({
    overlay: false,
    setOverlay: (overlay: boolean) => { }
});