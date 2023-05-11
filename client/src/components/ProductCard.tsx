import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../redux/actions/cartItems";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Product {
    id: string,
    name: string,
    img1: any,
    img2: any,
    price: number
}

const ProductCard = (props: Product) => {
    const [image, setImage] = useState(true);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cartItems = useAppSelector(state => state.cartItems);
    const { name, id, img1, img2, price } = props;

    const linkClicked = (id: string) => navigate(`/products/${id}`);

    const addToCart = (e: any, id: string, name: string, image: string, price: number) => {
        dispatch(addCartItem({ id, name, image, price }));
        e.target.setAttribute("disabled", true);
    }

    return (
        <div className="w-60 pb-2 bg-white border border-white text-center" key={id}>
            {image ?
                <img className="cursor-pointer h-4/6 w-full object-cover border-b" onClick={() => linkClicked(id)} src={`http://localhost:1337${img1.data.attributes.url}`} alt="product" loading="lazy" onMouseEnter={() => setImage(false)} /> :
                // console.log(`${process.env.REACT_APP_UP_URL}${img1.data.attributes.url}`)
                <img className="cursor-pointer h-4/6 w-full object-cover border-b" onClick={() => linkClicked(id)} src={`http://localhost:1337${img2.data.attributes.url}`} alt="product" loading="lazy" onMouseLeave={() => setImage(true)} />}
            <h1 className="mt-2 mx-auto cursor-pointer w-fit text-lg" onClick={() => linkClicked(id)}>{name}</h1>
            <p className="my-1">${price}</p>
            <button className={`border border-white text-white bg-dark-blue px-2 py-1 disabled:bg-light-grey`} disabled={itemExists(cartItems, id)} onClick={(e: any) => addToCart(e, id, name, img1, price)}>ADD TO CART</button>
        </div>
    );
}

const itemExists = (arr: any, id: any) => {
    console.log(arr)
    return arr.some((el: any) => {
        return el.id === id;
    });
}

export default ProductCard;