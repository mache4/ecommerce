import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    const linkClicked = (id: number) => navigate(`/products/${id}`);

    return (
        <div className="grid grid-cols-8 grid-rows-4 gap-0.5 m-10 text-white" style={{ height: "70vh" }}>
            <div className="relative row-start-1 row-end-5 col-start-1 col-end-5 bg-dark-blue overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=Jacket`)}>
                <LazyLoadImage className="opacity-80 object-cover h-full w-full" src={require("../assets/jacket.jpg")} alt="" />
                <p className="absolute top-2/4 left-2/4 font-bold text-4xl -translate-x-2/4 -translate-y-2/4">JACKETS</p>
            </div>
            <div className="relative row-start-1 row-end-3 col-start-5 col-end-9 bg-dark-blue overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=Shirt`)}>
                <LazyLoadImage className="opacity-80 object-cover h-full w-full" src={require("../assets/shirt.jpg")} alt="" />
                <p className="absolute top-2/4 left-2/4 font-bold text-4xl -translate-x-2/4 -translate-y-2/4">SHIRTS</p>
            </div>
            <div className="relative row-start-3 row-end-5 col-start-5 col-end-7 bg-dark-blue overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=Jeans`)}>
                <LazyLoadImage className="opacity-80 object-cover h-full w-full" src={require("../assets/jeans.jpg")} alt="" />
                <p className="absolute top-2/4 left-2/4 font-bold text-4xl -translate-x-2/4 -translate-y-2/4">JEANS</p>
            </div>
            <div className="relative row-start-3 row-end-5 col-start-7 col-end-9 bg-dark-blue overflow-hidden cursor-pointer" onClick={() => navigate(`/shop?categories=Coat`)}>
                <LazyLoadImage className="opacity-80 object-cover h-full w-full" src={require("../assets/coat.jpg")} alt="" />
                <p className="absolute top-2/4 left-2/4 font-bold text-4xl -translate-x-2/4 -translate-y-2/4">COATS</p>
            </div>
        </div>
    );
}

export default Main;