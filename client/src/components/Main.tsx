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
            {props.data && <div className="grid-cols-8 grid-rows-4 gap-0.5 m-10 text-white lg:grid inline" style={{ height: windowSize[0] > 1025 ? "70vh" : "20vh" }}>
                <div className="relative row-start-1 row-end-5 col-start-1 col-end-5 overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=Jacket`)}>
                    <LazyLoadImage className="opacity-80 object-cover h-full w-full" src={`http://localhost:1337${props.data[3].attributes.image.data.attributes.url}`} alt="" />
                    <p className="absolute top-2/4 left-2/4 font-bold text-4xl -translate-x-2/4 -translate-y-2/4">JACKETS {windowSize[0]}</p>
                </div>
                <div className="relative row-start-1 row-end-3 col-start-5 col-end-9 overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=Jeans`)}>
                    <LazyLoadImage className="opacity-80 object-cover h-full w-full" src={`http://localhost:1337${props.data[4].attributes.image.data.attributes.url}`} alt="" />
                    <p className="absolute top-2/4 left-2/4 font-bold text-4xl -translate-x-2/4 -translate-y-2/4">JEANS</p>
                </div>
                <div className="relative row-start-3 row-end-5 col-start-5 col-end-7 overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=Shirt`)}>
                    <LazyLoadImage className="opacity-80 object-cover h-full w-full" src={`http://localhost:1337${props.data[5].attributes.image.data.attributes.url}`} alt="" />
                    <p className="absolute top-2/4 left-2/4 font-bold text-4xl -translate-x-2/4 -translate-y-2/4">SHIRTS</p>
                </div>
                <div className="relative row-start-3 row-end-5 col-start-7 col-end-9 overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=Coat`)}>
                    <LazyLoadImage className="opacity-80 object-cover h-full w-full" src={`http://localhost:1337${props.data[6].attributes.image.data.attributes.url}`} alt="" />
                    <p className="absolute top-2/4 left-2/4 font-bold text-4xl -translate-x-2/4 -translate-y-2/4">COATS</p>
                </div>
            </div>}
        </>
    );
}

export default Main;