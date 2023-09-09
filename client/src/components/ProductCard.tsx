import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../core/hooks";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../redux/actions/cartItems";
import { itemExists } from "../core/utils";
import type { ProductType } from "../core/types";

const ProductCard = (props: ProductType) => {
    const [image, setImage] = useState(true);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cartItems = useAppSelector(state => state.cartItems);
    const { name, _id, img1, img2, price } = props;

    const linkClicked = (id: string) => navigate(`/products/${id}`);

    const addToCart = (id: string, name: string, image: string, price: number) => {
        dispatch(addCartItem({ id, name, image, price }));
    }

    return (
        <div className="w-44 md:w-60 pb-2 bg-white shadow-md text-center" key={_id}>
            {image ?
                <img className="cursor-pointer h-2/3 w-full object-cover shadow-md" onClick={() => linkClicked(_id)} src={img1} alt="product" loading="lazy" onMouseEnter={() => setImage(false)} /> :
                <img className="cursor-pointer h-2/3 w-full object-cover shadow-md" onClick={() => linkClicked(_id)} src={img2} alt="product" loading="lazy" onMouseLeave={() => setImage(true)} />}
            <h1 className="mt-2 mx-auto cursor-pointer w-fit text-base md:text-lg" onClick={() => linkClicked(_id)}>{name.length < 20 ? name : name.slice(0, 20) + "..."}</h1>
            <p className="my-1 text-sm md:text-base">${price}</p>
            <button className="border border-white text-white bg-dark-blue px-2 py-1 tracking-wide disabled:bg-light-grey text-sm md:text-base" disabled={itemExists(cartItems, _id)} onClick={() => addToCart(_id, name, img1, price)}>ADD TO CART</button>
        </div>
    );
}

export default ProductCard;