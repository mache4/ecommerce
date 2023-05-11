import { useContext, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { OverlayContext } from "../contexts/OverlayContext";
import { SigninContext } from "../contexts/SigninContext";
import { useAppDispatch, useAppSelector } from "../hooks";
import { LOGOUT } from "../constants/actionTypes";
import CategoriesDropdown from "./CategoriesDropdown";
import CartDropdown from "./CartDropdown";

const Navbar = () => {
    const { setOverlay } = useContext(OverlayContext);
    const { setSignin } = useContext(SigninContext);
    const [showCategories, setShowCategories] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const cartItems = useAppSelector(state => state.cartItems);
    const dispatch = useAppDispatch();

    const showSignin = () => {
        setOverlay(true);
        setSignin(true);
    }

    const logout = () => {
        localStorage.clear();
        dispatch({ type: LOGOUT });

        window.location.reload();
    }

    return (
        <div className="w-full bg-white text-dark-blue fixed z-10 font-bold text-xl px-16 shadow-md h-20 flex items-center">
            <div className="text-2xl w-1/6">LOGO</div>
            <div className="relative w-3/6 h-full flex items-center gap-10">
                <Link to="/" className="nav_item relative overflow-hidden font-bold cursor-pointer h-full flex items-center">HOME</Link>
                <Link to="/shop" className="nav_item relative overflow-hidden font-bold cursor-pointer h-full flex items-center">SHOP</Link>
                <p className="relative font-bold cursor-pointer h-full flex items-center" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>CATEGORIES <CategoriesDropdown show={showCategories} /></p>
            </div>
            <div className="w-2/6 text-right flex items-center justify-end gap-2">
                <div className="relative" onClick={() => setShowCart(!showCart)}>
                    <AiOutlineShoppingCart className="text-4xl p-1 cursor-pointer" />
                    <div className="absolute w-4 h-4 top-0 right-0 bg-blue rounded-full text-sm text-white flex justify-center items-center">{cartItems.length}</div>
                    <CartDropdown show={showCart} />
                </div>
                <AiOutlineHeart className="text-4xl p-1 cursor-pointer" />
                <AiOutlineSearch className="text-4xl p-1 cursor-pointer" />
                <AiOutlineUser className="text-4xl p-1 cursor-pointer" /* onClick={logout} */ />
                {/* {!localStorage.getItem("profile") || localStorage.getItem("profile") === "{}" ?
                    <button className="border px-4 py-2" onClick={showSignin}>Signin</button> :
                    <AiOutlineUser className="text-4xl p-1 cursor-pointer" onClick={logout} />
                } */}
            </div>
        </div>
    );
}

export default Navbar;