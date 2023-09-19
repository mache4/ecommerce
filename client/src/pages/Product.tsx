import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch, useProduct } from "../core/hooks";
import { addCartItem } from "../redux/actions/cartItems";
import { itemExists } from "../core/utils";
import ClipLoader from "react-spinners/ClipLoader";

const Product = () => {
    const params = useParams();
    const { id } = params;
    const { loading, data } = useProduct(id);

    const [activeImage, setActiveImage] = useState(true);
    const cartItems = useAppSelector(state => state.cartItems);
    const dispatch = useAppDispatch();

    const addToCart = () => {
        dispatch(addCartItem({
            id: id,
            name: data?.name,
            image: data?.img1,
            price: data?.price,
            priceId: data?.priceId
        }));
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center" style={{ height: "calc(100vh - 240px)" }}>
                <ClipLoader color="black" />
            </div>
        );
    }

    return (
        <div className="pt-20 shadow-md">
            {data && <div className="flex flex-col md:flex-row" >
                <div className="md:w-1/2 flex justify-center items-center overflow-hidden">
                    {activeImage ? <img className="w-full lg:w-3/4 object-cover" src={data.img1} alt="" /> : <img className="w-full lg:w-3/4 object-cover" src={data.img2} alt="" />}
                </div>
                <div className="md:w-1/2 px-5 py-10 border-l-2 border-l-light-grey flex flex-col items-center">
                    <p className="text-2xl sm:text-4xl font-semibold md:my-4">{data.name}</p>
                    <p className="text-xl sm:text-2xl font-semibold my-2 md:my-4">${data.price}</p>
                    <div className="flex -order-last md:order-none items-center justify-center md:justify-start md:border-b-2 border-b-light-grey py-5">
                        <img className="w-1/2 sm:w-1/4 border border-light-grey object-cover cursor-pointer hover:border-2 hover:border-black" src={data.img1} alt="" onClick={() => setActiveImage(true)} />
                        <img className="w-1/2 sm:w-1/4 border border-light-grey object-cover cursor-pointer hover:border-2 hover:border-black" src={data.img2} alt="" onClick={() => setActiveImage(false)} />
                    </div>
                    <button className="text-lg sm:text-xl bg-blue text-white md:m-5 px-4 py-2 sm:px-8 sm:py-4 disabled:bg-light-grey" disabled={itemExists(cartItems, id)} onClick={addToCart}>ADD TO CART</button>
                </div>
            </div>}
        </div>
    );
}

// style={{ height: "calc(100vh - 240px)" }}

export default Product;