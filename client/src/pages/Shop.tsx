import { useState, useEffect } from "react";
import { useProducts } from "../core/hooks";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { ProductType } from "../core/types";
import { useSearchParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { ImCross } from "react-icons/im";

const Shop = () => {
    const [sidebar, setSidebar] = useState(false);
    const [search] = useSearchParams();
    const { loading, data } = useProducts({
        categories: search.get("categories")?.split(",") ?? [],
        sort: search.get("sort"),
        maxPrice: Number(search.get("maxPrice"))
    }, search);

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    let products = <p className="text-white text-lg">No products found.</p>;
    if (data && data.length > 0)
        products = data.map((product: ProductType) => {
            const { _id, name, img1, img2, price, priceId, category, type, createdAt } = product;
            return <ProductCard
                key={_id}
                _id={_id}
                name={name}
                price={price}
                priceId={priceId}
                img1={img1}
                img2={img2}
                category={category}
                type={type}
                createdAt={createdAt} />;
        });

    return (
        <div className="flex overflow-hidden pt-20">
            {windowSize[0] > 1023 && <Filters />}

            {/* sidebar */}
            {windowSize[0] < 1023 && <TbArrowBigRightFilled className="fixed text-3xl text-dark-blue bg-white border border-dark-blue rounded-full top-1/2 left-2 cursor-pointer" onClick={() => setSidebar(true)} />}
            <div className="relative flex lg:hidden text-2xl lg:w-1/2 justify-end">
                <div className={`fixed top-0 left-0 h-full bg-dark-blue text-white transition-all z-50 ${sidebar ? "translate-x-0" : "-translate-x-full"}`}
                    style={{ width: windowSize[0] > 768 ? "50vw" : "100vw" }}>
                    <ImCross className="absolute top-2 right-2 cursor-pointer" onClick={() => setSidebar(false)} />
                    <Filters />
                </div>
            </div>
            <div className="w-full bg-dark-blue lg:w-4/5">
                <h1 className="text-white pt-8 pb-4 mx-20 lg:mx-32 border-b border-b-white text-center text-3xl md:text-5xl lg:text-left">SHOP</h1>
                <div className="p-10 md:px-20 lg:px-32 py-5 flex flex-wrap justify-center gap-x-20 gap-y-8 lg:justify-start" >
                    {loading && <div className="h-screen w-full"><BarLoader height={10} width="100%" color="white" /></div>}
                    {!loading && products}
                </div>
            </div>
        </div>
    );
}

export default Shop;