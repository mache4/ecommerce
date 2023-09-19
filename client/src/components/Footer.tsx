import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-row w-full py-10 flex-wrap px-10 md:px-20 lg:px-24 border-t border-t-light-grey">
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <h1 className="text-lg border-b">Categories</h1>
                <Link to="/shop?sort=createdAt&maxPrice=0&categories=jacket" className="text-dark-grey mt-2 border-b block">Jackets</Link>
                <Link to="/shop?sort=createdAt&maxPrice=0&categories=jeans" className="text-dark-grey mt-2 border-b block">Jeans</Link>
                <Link to="/shop?sort=createdAt&maxPrice=0&categories=shirt" className="text-dark-grey mt-2 border-b block">Shirts</Link>
                <Link to="/shop?sort=createdAt&maxPrice=0&categories=coat" className="text-dark-grey mt-2 border-b block">Coats</Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <h1 className="text-lg border-b">Links</h1>
                <Link to="/shop" className="text-dark-grey mt-2 border-b block">Store</Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <h1 className="text-lg border-b">Contact</h1>
                <p className="text-dark-grey mt-2 border-b">branislavrendulic@gmail.com</p>
                <p className="text-dark-grey mt-2 border-b cursor-pointer" onClick={() => window.open("https://github.com/mache4")}>Github</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <h1 className="text-lg border-b">About</h1>
                <p className="text-dark-grey mt-2 border-b leading-7">This app client side is based on React. It is full functional store with Stripe for payment processing, Express server and MongoDB. TailwindCSS is used for styling.</p>
            </div>
        </div>
    );
}

export default Footer;