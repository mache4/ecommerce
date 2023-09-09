import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

interface Props {
    data: any,
    loading: boolean
}

const Main = (props: Props) => {
    const navigate = useNavigate();
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);


    if (props.loading) {
        return <div className="flex justify-center items-center" style={{ height: "70vh" }}>
            <ClipLoader />
        </div>
    }

    return (
        <>
            {props.data && <div className="grid-cols-4 grid-rows-4 gap-0.5 m-2 lg:m-10 text-white grid" style={{ height: windowSize[0] > 1025 ? "70vh" : "50vh" }}>
                <div className="relative row-start-1 row-end-3 col-start-1 col-end-3 lg:row-end-5 overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=jacket`)}>
                    <LazyLoadImage className="object-cover h-full w-full" src={props.data[0].image} alt="" />
                    <p className="absolute top-2/4 left-2/4 font-bold text-xl md:text-3xl lg:text-4xl -translate-x-2/4 -translate-y-2/4">JACKETS</p>
                </div>
                <div className="relative row-start-1 row-end-3 col-start-3 col-end-5 overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=jeans`)}>
                    <LazyLoadImage className="object-cover h-full w-full" src={props.data[1].image} alt="" />
                    <p className="absolute top-2/4 left-2/4 font-bold text-xl md:text-3xl lg:text-4xl -translate-x-2/4 -translate-y-2/4">JEANS</p>
                </div>
                <div className="relative row-start-3 row-end-5 col-start-3 col-end-5 lg:col-end-4 overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=shirt`)}>
                    <LazyLoadImage className="object-cover h-full w-full" src={props.data[2].image} alt="" />
                    <p className="absolute top-2/4 left-2/4 font-bold text-xl md:text-3xl lg:text-4xl -translate-x-2/4 -translate-y-2/4">SHIRTS</p>
                </div>
                <div className="relative row-start-3 row-end-5 col-start-1 col-end-3 lg:col-start-4 lg:col-end-5 overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=coat`)}>
                    <LazyLoadImage className="object-cover h-full w-full" src={props.data[3].image} alt="" />
                    <p className="absolute top-2/4 left-2/4 font-bold text-xl md:text-3xl lg:text-4xl -translate-x-2/4 -translate-y-2/4">COATS</p>
                </div>
            </div>}
        </>
    );
}

export default Main;