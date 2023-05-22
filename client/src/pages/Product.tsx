import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch, useProduct } from "../core/hooks";
import { addCartItem } from "../redux/actions/cartItems";
import { itemExists } from "../core/utils";
import ClipLoader from "react-spinners/ClipLoader";

const Product = () => {
    const params = useParams();
    let { id } = params;
    const { loading, data } = useProduct(Number(id));

    const [activeImage, setActiveImage] = useState(true);
    const cartItems = useAppSelector(state => state.cartItems);
    const dispatch = useAppDispatch();

    const addToCart = () => {
        dispatch(addCartItem({
            id: Number(id),
            name: data?.attributes.name,
            image: data?.attributes.img1,
            price: data?.attributes?.price
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
            <div className="flex" style={{ height: "calc(100vh - 240px)" }}>
                <div className="w-1/2 flex justify-center items-center overflow-hidden">
                    {activeImage ? <img className="w-3/4 object-cover" src={`http://localhost:1337${data?.attributes.img1?.data.attributes.url}`} alt="" /> : <img className="w-3/4 object-cover" src={`http://localhost:1337${data?.attributes.img2?.data.attributes.url}`} alt="" />}
                </div>
                <div className="w-1/2 px-5 py-10 border-l-2 border-l-light-grey flex flex-col items-center">
                    <p className="text-4xl font-semibold my-4">{data?.attributes?.name}</p>
                    <p className="text-2xl font-semibold my-4">${data?.attributes?.price}</p>
                    <div className="flex border-b-2 border-b-light-grey py-5">
                        <img className="w-1/4 border border-light-grey object-cover cursor-pointer hover:border-2 hover:border-black" src={`http://localhost:1337${data?.attributes.img1.data.attributes.url}`} alt="" onClick={() => setActiveImage(true)} />
                        <img className="w-1/4 border border-light-grey object-cover cursor-pointer hover:border-2 hover:border-black" src={`http://localhost:1337${data?.attributes.img2.data.attributes.url}`} alt="" onClick={() => setActiveImage(false)} />
                    </div>
                    <button className="text-xl bg-blue text-white m-5 px-8 py-4 disabled:bg-light-grey" disabled={itemExists(cartItems, Number(id))} onClick={addToCart}>ADD (TO CART)</button>
                </div>
            </div>
        </div>
    );
}

export default Product;