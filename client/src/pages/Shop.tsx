import { useProducts } from "../core/hooks";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { ProductType } from "../core/types";
import { useSearchParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const Shop = () => {
    const [search] = useSearchParams();
    const { loading, data } = useProducts({
        categories: search.get("categories")?.split(",") ?? [],
        sort: search.get("sort"),
        maxPrice: Number(search.get("maxPrice"))
    }, search);

    let products = <p className="text-white text-lg">No products found.</p>;
    if (data.length > 0)
        products = data.map((product: { id: number, attributes: ProductType }) => {
            const { name, img1, img2, price } = product.attributes;
            return <ProductCard
                key={product.id}
                id={product.id}
                name={name}
                img1={img1}
                img2={img2}
                price={price} />;
        });

    return (
        <div className="flex overflow-hidden pt-20">
            <Filters />
            <div className="w-full bg-dark-blue lg:w-4/5">
                <h1 className="text-white text-5xl pt-8 pb-4 mx-32 border-b border-b-white text-center lg:text-left">SHOP</h1>
                <div className="px-32 py-5 flex flex-wrap justify-center gap-x-20 gap-y-8 lg:justify-start" >
                    {loading && <BarLoader height={10} width="100%" color="white" />}
                    {!loading && products}
                </div>
            </div>
        </div>
    );
}

export default Shop;