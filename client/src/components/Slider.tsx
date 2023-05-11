import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef: any = useRef(null);
    const delay = 5000;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    // ODKOMENTOVATI OVO
    useEffect(() => {
        // resetTimeout();
        // timeoutRef.current = setTimeout(() =>
        //     setCurrentSlide((prevIndex) => prevIndex === 3 - 1 ? 0 : prevIndex + 1), delay);
        // return () => {
        //     resetTimeout();
        // };
    }, [currentSlide]);

    return (
        <div className="relative overflow-hidden" style={{ height: "90vh" }}>
            <div className="h-full flex transition-transform bg-dark-blue" style={{ width: "300vw", transform: `translateX(-${currentSlide * 100}vw)` }}>
                <LazyLoadImage className="h-full object-cover opacity-80" src={require("../assets/slider-1.jpg")} alt="slider-1" /* effect="blur" */ style={{ width: "100vw" }} />
                <LazyLoadImage className="h-full object-cover opacity-80" src={require("../assets/slider-2.jpg")} alt="slider-2" /* effect="blur" */ style={{ width: "100vw" }} />
                <LazyLoadImage className="h-full object-cover opacity-80" src={require("../assets/slider-3.jpg")} alt="slider-3" /* effect="blur" */ style={{ width: "100vw" }} />
            </div>
        </div>
    );
}

export default Slider;