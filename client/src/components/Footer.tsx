const Footer = () => {
    return (
        <div className="flex w-full py-10 px-32 border-t border-t-light-grey">
            <div className="w-1/4">
                <h1 className="text-lg">Categories</h1>
                <p className="text-dark-grey mt-2">Jackets</p>
                <p className="text-dark-grey mt-2">Jeans</p>
                <p className="text-dark-grey mt-2">Shirts</p>
                <p className="text-dark-grey mt-2">Coats</p>
            </div>
            <div className="w-1/4">
                <h1 className="text-lg">Links</h1>
                <p className="text-dark-grey mt-2">Store</p>
                <p className="text-dark-grey mt-2">Cookies</p>
            </div>
            <div className="w-1/4">
                <h1 className="text-lg">Contact</h1>
                <p className="text-dark-grey mt-2">Portfolio</p>
                <p className="text-dark-grey mt-2">Github</p>
            </div>
            <div className="w-1/4">
                <h1 className="text-lg">About</h1>
                <p className="text-dark-grey mt-2 leading-7">This app's client side is based on React. It is full functional store app with Strapi as contact management system and Stripe for payment processing. TailwindCSS is used for styling.</p>
            </div>
        </div>
    );
}

export default Footer;