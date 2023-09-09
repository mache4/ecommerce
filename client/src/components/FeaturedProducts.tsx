import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import { getFeaturedProducts } from "../redux/actions/products";
import ProductCard from "./ProductCard";
import type { ProductType } from "../core/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";

interface Props {
    data: any,
    loading: boolean
}

const FeaturedProducts = (props: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const delay = 1500;
    const dispatch = useAppDispatch();
    const featuredProductsData = useAppSelector((state) => state.products.featuredProducts);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    useEffect(() => {
        dispatch(getFeaturedProducts());
    }, [dispatch]);

    if (props.loading) {
        return <div className="flex justify-center items-center" style={{ height: "70vh" }}>
            <ClipLoader />
        </div>
    }

    return (
        <div className="m-10">
            <div className="relative overflow-auto">
                <p className="text-center text-dark-blue text-3xl font-bold">Featured Products</p>
                {/* {windowSize[0] > 1025 ? <div className="px-5 py-5 flex flex-wrap justify-center items-center overflow-auto gap-x-8 flex-col lg:flex-row">
                    {featuredProductsData && featuredProductsData.map((product: ProductType) => {
                        const { _id, name, img1, img2, price, category, type, createdAt } = product;
                        return <ProductCard
                            key={_id}
                            _id={_id}
                            name={name}
                            img1={img1}
                            img2={img2}
                            price={price}
                            category={category}
                            type={type}
                            createdAt={createdAt} />;
                    })}
                </div> :
                    <div className="h-full flex justify-center items-center transition-transform bg-dark-blue">
                        {featuredProductsData && featuredProductsData.map((product: ProductType) => {
                            const { _id, name, img1, img2, price, category, type, createdAt } = product;
                            return <div>
                                <ProductCard
                                    key={_id}
                                    _id={_id}
                                    name={name}
                                    img1={img1}
                                    img2={img2}
                                    price={price}
                                    category={category}
                                    type={type}
                                    createdAt={createdAt} />
                            </div>;
                        })}
                    </div>} */}
                <div className="lg:px-5 py-5 flex flex-wrap justify-center items-center gap-y-5 lg:gap-y-0 lg:gap-x-8 flex-col md:flex-row bg-dark-blue overflow-hidden">
                    {featuredProductsData && featuredProductsData.map((product: ProductType) => {
                        const { _id, name, img1, img2, price, category, type, createdAt } = product;
                        return <ProductCard
                            key={_id}
                            _id={_id}
                            name={name}
                            img1={img1}
                            img2={img2}
                            price={price}
                            category={category}
                            type={type}
                            createdAt={createdAt} />;
                    })}
                </div>
            </div>
            {/* {props.data && <LazyLoadImage className="absolute top-0 left-0 opacity-80 object-cover h-full w-full" src={props.data[0].image} alt="" />} */}
        </div>
    );
}

export default FeaturedProducts;