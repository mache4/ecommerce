import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useAppSelector } from "../core/hooks";
import CategoriesDropdown from "./CategoriesDropdown";
import CartDropdown from "./CartDropdown";

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const cartItems = useAppSelector(state => state.cartItems);

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div className="w-full bg-white text-dark-blue fixed z-30 font-bold text-xl px-8 sm:px-16 shadow-md h-20 flex items-center">
            <div className="text-2xl w-1/2 lg:w-1/6">LOGO</div>

            {/* menu */}
            <div className="relative w-3/6 h-full items-center gap-10 hidden lg:flex">
                <Link to="/" className="nav_item relative overflow-hidden font-bold cursor-pointer h-full flex items-center">HOME</Link>
                <Link to="/shop" className="nav_item relative overflow-hidden font-bold cursor-pointer h-full flex items-center">SHOP</Link>
                <div className="relative font-bold cursor-pointer h-full flex items-center" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
                    CATEGORIES <CategoriesDropdown show={showCategories} />
                </div>
            </div>

            {/* cart */}
            <div className="w-2/6 text-right items-center justify-center lg:justify-end gap-2 flex">
                <div className="relative">
                    <AiOutlineShoppingCart className="text-4xl p-1 cursor-pointer" onClick={() => setShowCart(!showCart)} />
                    <div className="absolute w-4 h-4 top-0 right-0 bg-blue rounded-full text-sm text-white flex justify-center items-center cursor-pointer" onClick={() => setShowCart(!showCart)}>{cartItems.length}</div>
                    <CartDropdown show={showCart} close={() => setShowCart(false)} />
                </div>
            </div>

            {/* sidebar */}
            <div className="flex lg:hidden text-2xl w-1/2 justify-end">
                <FaBars className="cursor-pointer" onClick={() => setSidebar(true)} />
                <div className={`fixed top-0 right-0 h-full bg-dark-blue text-white transition-all z-50 ${sidebar ? "translate-x-0" : "translate-x-full"}`}
                    style={{ width: windowSize[0] > 768 ? "50vw" : "100vw" }}>
                    <div className="flex flex-col items-center px-10 py-10 gap-6">
                        <ImCross className="cursor-pointer" onClick={() => setSidebar(false)} />
                        <Link to="/" onClick={() => setSidebar(false)} className="overflow-hidden font-bold cursor-pointer h-full flex items-center">HOME</Link>
                        <Link to="/shop" onClick={() => setSidebar(false)} className="overflow-hidden font-bold cursor-pointer h-full flex items-center">SHOP</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;