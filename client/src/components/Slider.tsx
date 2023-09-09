import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";
import { HomeImageType } from "../core/types";
import { useNavigate } from "react-router-dom";

interface Props {
    data: any,
    loading: boolean
}

const Slider = (props: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const delay = 4500;
    const navigate = useNavigate();

    function resetTimeout() {
        if (timeoutRef.current)
            clearTimeout(timeoutRef.current);
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setCurrentSlide((prevIndex) => prevIndex === 3 - 1 ? 0 : prevIndex + 1), delay);
        return () => resetTimeout();
    }, [currentSlide]);

    if (props.loading) {
        return <div className="flex justify-center items-center" style={{ height: "90vh" }}>
            <ClipLoader />
        </div>
    }

    return (
        <div className="relative overflow-hidden" style={{ height: "90vh" }}>
            <div className="absolute top-1/2 -translate-y-1/2 left-20 z-10 text-left w-2/3 md:w-1/2">
                {/* <h1 className="text-white text-6xl font-extrabold uppercase leading-tight">The outfits you are looking for are here,</h1> */}
                <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase leading-tight mb-10">
                    The outfits you are looking for are here<span className="hidden lg:inline">, The Only Wardrobe You Need</span>.
                </h1>
                <button onClick={() => navigate("/shop")} className="border border-white bg-transparent text-white py-4 px-8 text-xl md:text-2xl uppercase font-semibold tracking-wider">
                    <span>Shop Now</span>
                </button>
            </div>
            <div className="h-full flex transition-transform bg-dark-blue" style={{ width: "300vw", transform: `translateX(-${currentSlide * 100}vw)` }}>
                {props.data && props.data.map((i: HomeImageType) =>
                    <LazyLoadImage key={i._id} className="h-full object-cover opacity-80" src={i.image} alt="slider-1" style={{ width: "100vw" }} />
                )}
            </div>
        </div>
    );
}

export default Slider;