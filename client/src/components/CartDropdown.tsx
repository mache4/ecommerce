import { useState, useEffect } from "react";
import { removeCartItem } from "../redux/actions/cartItems";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import type { CartItemType } from "../core/types";
import { FaTrashAlt } from "react-icons/fa";
import * as api from "../core/api";
import StripeCheckout from "react-stripe-checkout";
import { ImCross } from "react-icons/im";

interface Props {
    show: boolean,
    close: any
}

const CartDropdown = (props: Props) => {
    const cartItems = useAppSelector(state => state.cartItems);
    let totalPrice = 0;

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const proceed = () => api.checkout(cartItems);

    console.log("PK_TEST", String(process.env.PK_TEST));

    return (
        <div className={`fixed lg:absolute flex flex-col lg:justify-center items-center border-2 lg:border-dark-blue h-full w-full lg:w-80 lg:h-auto top-0 lg:top-full right-0 py-10 lg:py-0 bg-dark-blue text-white lg:text-black lg:bg-white z-50 transition-transform 
        ${windowSize[0] > 1025 ? props.show ? "" : "hidden" : props.show ? "translate-y-0" : "translate-y-full"}`} style={{ minHeight: "15rem" }}>
            {cartItems.length === 0 && <p className="mt-10 lg:mt-0 text-white lg:text-dark-blue font-thin">Cart is empty.</p>}
            {cartItems.length > 0 && <>
                <div className="overflow-auto h-5/6 lg:h-96">
                    {cartItems?.map((i: CartItemType) => {
                        totalPrice += i.price;
                        return <CartItem
                            key={i.id}
                            id={i.id}
                            name={i.name}
                            image={i.image}
                            price={i.price}
                            priceId={i.priceId} />;
                    })}
                </div>
                <div className="text-center py-1 px-2 w-full flex flex-row items-center" style={{ boxShadow: "0 -2px 4px #ccc" }}>
                    <div className="w-1/2">
                        <p className="text-center my-1">Total Price</p>
                        <p className="text-center my-1">${totalPrice}</p>
                    </div>
                    <StripeCheckout
                        stripeKey={String(process.env.PK_TEST)}
                        // staviti .env za key
                        token={proceed}
                        amount={totalPrice * 100} />
                </div>
            </>}
            <ImCross className="inline lg:hidden absolute top-2 right-2 cursor-pointer" onClick={props.close} />
        </div>
    );
}

const CartItem = (props: CartItemType) => {
    const dispatch = useAppDispatch();
    const { id, name, image, price } = props;

    const removeItem = (id: string) => dispatch(removeCartItem(id));

    return (
        <div className="relative flex items-center border border-white lg:shadow-md lg:mb-1 mx-auto sm:w-3/4 md:w-1/2 lg:w-auto">
            <img className="object-cover w-1/3 lg:w-1/2" src={image} alt="" />
            <div className="w-1/2 text-left pl-2">
                <p className="text-base">{name}</p>
                <p className="text-base">${price}</p>
            </div>
            <button className="absolute top-0 right-0 m-4 text-base" onClick={() => removeItem(id)}><FaTrashAlt className="text-xl text-red" /></button>
        </div>
    );
}

export default CartDropdown;