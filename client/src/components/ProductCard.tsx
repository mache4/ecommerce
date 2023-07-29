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
    const { name, id, img1, img2, price } = props;

    const linkClicked = (id: number) => navigate(`/products/${id}`);

    const addToCart = (id: number, name: string, image: string, price: number) => {
        dispatch(addCartItem({ id, name, image, price }));
    }

    return (
        <div className="w-60 pb-2 bg-white shadow-md text-center" key={id}>
            {image ?
                <img className="cursor-pointer h-4/6 w-full object-cover shadow-md" onClick={() => linkClicked(id)} src={`http://localhost:1337${img1.data.attributes.url}`} alt="product" loading="lazy" onMouseEnter={() => setImage(false)} /> :
                // console.log(`${process.env.REACT_APP_UP_URL}${img1.data.attributes.url}`)
                <img className="cursor-pointer h-4/6 w-full object-cover shadow-md" onClick={() => linkClicked(id)} src={`http://localhost:1337${img2.data.attributes.url}`} alt="product" loading="lazy" onMouseLeave={() => setImage(true)} />}
            <h1 className="mt-2 mx-auto cursor-pointer w-fit text-lg" onClick={() => linkClicked(id)}>{name}</h1>
            <p className="my-1">${price}</p>
            <button className={`border border-white text-white bg-dark-blue px-2 py-1 disabled:bg-light-grey`} disabled={itemExists(cartItems, Number(id))} onClick={() => addToCart(id, name, img1, price)}>ADD TO CART</button>
        </div>
    );
}

export default ProductCard;