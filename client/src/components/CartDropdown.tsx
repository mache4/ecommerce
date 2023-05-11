import { useEffect } from "react";
import { removeCartItem } from "../redux/actions/cartItems";
import { useAppDispatch, useAppSelector } from "../hooks";

interface Props {
    show: boolean
}

const CartDropdown = (props: Props) => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cartItems);

    const removeItem = (id: any) => {
        dispatch(removeCartItem(id));
    }

    useEffect(() => {
        console.log("alo")
    }, []);

    return (
        <div className={`absolute top-full left-0 border border-t-0 border-dark-blue bg-white z-50 ${props.show ? "" : "hidden"}`}>
            {cartItems.map((i: any) => <div key={i.id} className="">
                <p>Name: {i.name}</p>
                <p>ID: {i.id}</p>
                <button className="border" onClick={() => removeItem(i.id)}>Remove Item</button>
            </div>)}
        </div>
    );
}

export default CartDropdown;