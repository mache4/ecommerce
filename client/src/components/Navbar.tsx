import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../core/hooks";
import CategoriesDropdown from "./CategoriesDropdown";
import CartDropdown from "./CartDropdown";

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const cartItems = useAppSelector(state => state.cartItems);

    return (
        <div className="w-full bg-white text-dark-blue fixed z-10 font-bold text-xl px-16 shadow-md h-20 flex items-center">
            <div className="text-2xl w-1/2 lg:w-1/6">LOGO</div>
            <div className="relative w-3/6 h-full items-center gap-10 hidden lg:flex">
                <Link to="/" className="nav_item relative overflow-hidden font-bold cursor-pointer h-full flex items-center">HOME</Link>
                <Link to="/shop" className="nav_item relative overflow-hidden font-bold cursor-pointer h-full flex items-center">SHOP</Link>
                <div className="relative font-bold cursor-pointer h-full flex items-center" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>CATEGORIES <CategoriesDropdown show={showCategories} /></div>
            </div>
            <div className="w-2/6 text-right items-center justify-end gap-2 hidden lg:flex">
                <div className="relative">
                    <AiOutlineShoppingCart className="text-4xl p-1 cursor-pointer" onClick={() => setShowCart(!showCart)} />
                    <div className="absolute w-4 h-4 top-0 right-0 bg-blue rounded-full text-sm text-white flex justify-center items-center cursor-pointer" onClick={() => setShowCart(!showCart)}>{cartItems.length}</div>
                    <CartDropdown show={showCart} />
                </div>
            </div>
            <div className="flex lg:hidden text-2xl w-1/2 justify-end">
                <FaBars />

            </div>
        </div>
    );
}

export default Navbar;