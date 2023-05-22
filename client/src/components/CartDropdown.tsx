import { useState } from "react";
import { removeCartItem } from "../redux/actions/cartItems";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import type { CartItem } from "../core/types";

interface Props {
    show: boolean
}

const CartDropdown = (props: Props) => {
    const cartItems = useAppSelector(state => state.cartItems);
    let totalPrice = 0;

    return (
        <div className={`absolute flex flex-col justify-center items-center border w-80 top-full right-0 bg-white z-50 ${props.show ? "" : "hidden"}`} style={{ minHeight: "15rem" }}>
            {cartItems.length === 0 && <p className="text-light-grey font-thin">Cart is empty.</p>}
            {cartItems.length > 0 && <>
                <div className="overflow-auto" style={{ height: "25rem" }}>
                    {cartItems?.map((i: CartItem) => {
                        console.log(i.id)
                        totalPrice += i.price;
                        return <CartItem
                            key={i.id}
                            id={i.id}
                            name={i.name}
                            image={i.image}
                            price={i.price} />;
                    })}
                </div>
                <p className="border w-full text-center">Total Price: ${totalPrice}</p>
                <button>Proceed</button>
            </>}
        </div>
    );
}

const CartItem = (props: CartItem) => {
    const dispatch = useAppDispatch();
    const { id, name, image, price } = props;

    const removeItem = (id: number) => {
        dispatch(removeCartItem(id));
    }

    return (
        <div className="flex items-center border px-4">
            <img className="object-cover w-1/2" src={`http://localhost:1337${image.data.attributes.url}`} alt="" />
            <div className="w-1/2">
                <p className="text-base">{name}</p>
                <p className="text-base">${price}</p>
                <button className="border text-base" onClick={() => removeItem(id)}>Remove Item</button>
            </div>
        </div>
    );
}

export default CartDropdown;