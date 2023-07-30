import { removeCartItem } from "../redux/actions/cartItems";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import type { CartItemType } from "../core/types";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
    show: boolean
}

const CartDropdown = (props: Props) => {
    const cartItems = useAppSelector(state => state.cartItems);
    let totalPrice = 0;

    return (
        <div className={`absolute flex flex-col justify-center items-center border-2 border-dark-blue w-80 top-full right-0 bg-white z-50 ${props.show ? "" : "hidden"}`} style={{ minHeight: "15rem" }}>
            {cartItems.length === 0 && <p className="text-dark-blue font-thin">Cart is empty.</p>}
            {cartItems.length > 0 && <>
                <div className="overflow-auto" style={{ height: "25rem" }}>
                    {cartItems?.map((i: CartItemType) => {
                        totalPrice += i.price;
                        return <CartItem
                            key={i.id}
                            id={i.id}
                            name={i.name}
                            image={i.image}
                            price={i.price} />;
                    })}
                </div>
                <div className="text-center py-1 px-2 w-full flex flex-row items-center" style={{ boxShadow: "0 -2px 4px #ccc" }}>
                    <div className="w-1/2">
                        <p className="text-center my-1">Total Price</p>
                        <p className="text-center my-1">${totalPrice}</p>
                    </div>
                    <button className="w-1/2 border px-4 py-1">Proceed</button>
                </div>
            </>}
        </div>
    );
}

const CartItem = (props: CartItemType) => {
    const dispatch = useAppDispatch();
    const { id, name, image, price } = props;

    const removeItem = (id: string) => {
        dispatch(removeCartItem(id));
    }

    return (
        <div className="relative flex items-center shadow-md mb-1">
            <img className="object-cover w-1/2" src={image} alt="" />
            <div className="w-1/2 text-left pl-2">
                <p className="text-base">{name}</p>
                <p className="text-base">${price}</p>
            </div>
            <button className="absolute top-0 right-0 m-4 text-base" onClick={() => removeItem(id)}><FaTrashAlt className="text-xl text-red" /></button>
        </div>
    );
}

export default CartDropdown;