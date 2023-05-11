import { useState, useEffect, useRef } from "react";
import { useAppSelector } from "../hooks";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";

const Shop = () => {
    const productsData: any = useAppSelector((state: any) => state.products.shopProducts);

    const [h1Height, setH1Height] = useState(0);
    const h1Ref: any = useRef(null);

    useEffect(() => {
        setH1Height(h1Ref.current.clientHeight);
    }, []);

    let products = <p>No products found.</p>;
    if (productsData)
        products = productsData.map((product: any) => {
            const id = product.id;
            const { name, img1, img2, price } = product.attributes;
            return <ProductCard
                id={id}
                name={name}
                img1={img1}
                img2={img2}
                price={price} />;
        });

    return (
        <div className="flex overflow-hidden">
            <Filters />
            <div className="w-4/5 pt-20 bg-dark-blue">
                <h1 className="text-white text-5xl text-center pt-8 pb-4 border-b border-b-white" ref={h1Ref}>SHOP</h1>
                <div className="px-5 py-5 flex flex-wrap justify-center gap-x-20 gap-y-8" >
                    {products}
                </div>
            </div>
        </div>
    );
}

export default Shop;