import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import { getFeaturedProducts } from "../redux/actions/products";
import ProductCard from "./ProductCard";
import type { ProductType } from "../core/types";
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
        <div className="m-10">
            <div className="relative overflow-auto">
                <p className="text-center text-dark-blue text-3xl font-bold">Featured Products</p>
                <div className="lg:px-5 py-5 flex flex-wrap justify-center items-center gap-y-5 lg:gap-y-0 lg:gap-x-8 flex-col md:flex-row bg-dark-blue overflow-hidden">
                    {featuredProductsData && featuredProductsData.map((product: ProductType) => {
                        const { _id, name, img1, img2, price, priceId, category, type, createdAt } = product;
                        return <ProductCard
                            key={_id}
                            _id={_id}
                            name={name}
                            img1={img1}
                            img2={img2}
                            price={price}
                            priceId={priceId}
                            category={category}
                            type={type}
                            createdAt={createdAt} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts;