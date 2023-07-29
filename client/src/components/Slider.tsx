import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";

interface Props {
    data: any,
    loading: boolean
}

const Slider = (props: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const delay = 4500;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setCurrentSlide((prevIndex) => prevIndex === 3 - 1 ? 0 : prevIndex + 1), delay);
        return () => {
            resetTimeout();
        };
    }, [currentSlide]);

    if (props.loading) {
        return <div className="flex justify-center items-center" style={{ height: "90vh" }}>
            <ClipLoader />
        </div>
    }

    return (
        <div className="relative overflow-hidden" style={{ height: "90vh" }}>
            <div className="h-full flex transition-transform bg-dark-blue" style={{ width: "300vw", transform: `translateX(-${currentSlide * 100}vw)` }}>
                {props.data && <>
                    <LazyLoadImage className="h-full object-cover opacity-80" src={`http://localhost:1337${props?.data[0].attributes.image.data.attributes.url}`} alt="slider-1" /* effect="blur" */ style={{ width: "100vw" }} />
                    <LazyLoadImage className="h-full object-cover opacity-80" src={`http://localhost:1337${props?.data[1].attributes.image.data.attributes.url}`} alt="slider-2" /* effect="blur" */ style={{ width: "100vw" }} />
                    <LazyLoadImage className="h-full object-cover opacity-80" src={`http://localhost:1337${props?.data[2].attributes.image.data.attributes.url}`} alt="slider-3" /* effect="blur" */ style={{ width: "100vw" }} /></>}
            </div>
        </div>
    );
}

export default Slider;