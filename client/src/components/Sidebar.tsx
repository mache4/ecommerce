import { useState, useEffect } from "react";

interface Props {
    children: React.ReactNode,
    show: boolean
}

const Sidebar = (props: Props) => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div
            className={`fixed top-0 right-0 h-full bg-dark-blue text-white transition-all z-50 ${props.show ? "translate-x-0" : "translate-x-full"}`}
            style={{ width: windowSize[0] > 768 ? "50vw" : "100vw" }}>
            {props.children}
        </div>
    );
}

export default Sidebar;