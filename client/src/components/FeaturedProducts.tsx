import { useEffect } from "react";
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
    const dispatch = useAppDispatch();
    const featuredProductsData = useAppSelector((state) => state.products.featuredProducts);

    useEffect(() => {
        dispatch(getFeaturedProducts());
    }, [dispatch]);

    if (props.loading) {
        return <div className="flex justify-center items-center" style={{ height: "70vh" }}>
            <ClipLoader />
        </div>
    }

    return (
        <div className="relative h-96 m-10">
            <div className="relative w-full h-full z-30">
                <p className="absolute top-2 left-4 text-white text-2xl font-bold">Featured Products</p>
                <div className="px-5 py-5 flex flex-wrap justify-center overflow-auto gap-x-8 flex-col lg:flex-row">
                    {featuredProductsData?.map((product: { id: number, attributes: ProductType }) => {
                        const id = product.id;
                        const { name, img1, img2, price } = product.attributes;
                        return <ProductCard
                            key={id}
                            id={id}
                            name={name}
                            img1={img1}
                            img2={img2}
                            price={price} />;
                    })}
                </div>
            </div>
            {props.data && <LazyLoadImage className="absolute top-0 left-0 opacity-80 object-cover h-full w-full" src={`http://localhost:1337${props.data[7].attributes.image.data.attributes.url}`} alt="" />}
        </div>
    );
}

// ../assets/new-collection.jpg

export default FeaturedProducts;