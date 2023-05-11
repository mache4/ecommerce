import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import * as api from "../api/index";
import { addCartItem } from "../redux/actions/cartItems";

const Product = () => {
    const [productData, setProductData]: any = useState();
    const [activeImage, setActiveImage]: any = useState(true);
    const cartItems = useAppSelector(state => state.cartItems);
    const params = useParams();
    const dispatch = useAppDispatch();
    const { id } = params;

    useEffect(() => {
        const apiFunction = async () => {
            try {
                const { data } = await api.getProduct(id);
                setProductData(data.data);
            } catch (err) {
                console.error(err);
            }
        }
        apiFunction();
    }, [id]);

    const addToCart = (e: any) => {
        dispatch(addCartItem({
            id: Number(id),
            name: productData.attributes.name,
            image: productData?.attributes.img1,
            price: productData?.attributes?.price
        }));
        e.target.setAttribute("disabled", true);
    }

    return (
        <div className="pt-20 shadow-md">
            <div className="flex" style={{ height: "calc(100vh - 240px)" }}> {/* PRODUCT-PAGE */}
                <div className="w-1/2 flex justify-center items-center overflow-hidden">
                    {activeImage ? <img className="w-3/4 object-cover" src={`http://localhost:1337${productData?.attributes.img1.data.attributes.url}`} alt="" /> : <img className="w-3/4 object-cover" src={`http://localhost:1337${productData?.attributes.img2.data.attributes.url}`} alt="" />}
                </div>
                <div className="w-1/2 px-5 py-10 border-l-2 border-l-light-grey flex flex-col items-center">
                    <p className="text-4xl font-semibold my-4">{productData?.attributes?.name}</p>
                    <p className="text-2xl font-semibold my-4">${productData?.attributes?.price}</p>
                    <div className="flex border-b-2 border-b-light-grey py-5">
                        <img className="w-1/4 border border-light-grey object-cover cursor-pointer hover:border-2 hover:border-black" src={`http://localhost:1337${productData?.attributes.img1.data.attributes.url}`} alt="" onClick={() => setActiveImage(true)} />
                        <img className="w-1/4 border border-light-grey object-cover cursor-pointer hover:border-2 hover:border-black" src={`http://localhost:1337${productData?.attributes.img2.data.attributes.url}`} alt="" onClick={() => setActiveImage(false)} />
                    </div>
                    <button className="text-xl bg-blue text-white m-5 px-8 py-4 disabled:bg-light-grey" disabled={itemExists(cartItems, Number(id))} onClick={addToCart}>ADD (TO CART)</button>
                </div>
            </div>
        </div>
    );
}

const itemExists = (arr: any, id: any) => {
    console.log(arr)
    return arr.some((el: any) => {
        return el.id === id;
    });
}

export default Product;