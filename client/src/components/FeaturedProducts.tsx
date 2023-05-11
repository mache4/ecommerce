import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getFeaturedProducts } from "../redux/actions/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
    const dispatch = useAppDispatch();
    const featuredProductsData = useAppSelector((state: any) => state.products.featuredProducts);

    useEffect(() => {
        dispatch(getFeaturedProducts());
    }, [dispatch]);

    return (
        <div className="h-96 m-10">
            <div className="relative w-full h-full bg-dark-blue">
                <p className="absolute top-2 left-4 text-white text-2xl font-bold z-30">Featured Products</p>
                <div className="px-5 py-5 flex flex-wrap justify-center overflow-auto gap-x-8">
                    {featuredProductsData?.map((product: any) => {
                        const id = product.id;
                        const { name, img1, img2, price } = product.attributes;
                        return <ProductCard
                            id={id}
                            name={name}
                            img1={img1}
                            img2={img2}
                            price={price} />;
                    })}
                </div>
            </div>
        </div>
    );
}

// ../assets/new-collection.jpg

export default FeaturedProducts;