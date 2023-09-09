const Footer = () => {
    return (
        <div className="flex flex-row w-full py-10 flex-wrap px-10 md:px-20 lg:px-24 border-t border-t-light-grey">
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <h1 className="text-lg border-b">Categories</h1>
                <p className="text-dark-grey mt-2 border-b">Jackets</p>
                <p className="text-dark-grey mt-2 border-b">Jeans</p>
                <p className="text-dark-grey mt-2 border-b">Shirts</p>
                <p className="text-dark-grey mt-2 border-b">Coats</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <h1 className="text-lg border-b">Links</h1>
                <p className="text-dark-grey mt-2 border-b">Store</p>
                <p className="text-dark-grey mt-2 border-b">Cookies</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <h1 className="text-lg border-b">Contact</h1>
                <p className="text-dark-grey mt-2 border-b">branislavrendulic@gmail.com</p>
                <p className="text-dark-grey mt-2 border-b">Github</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <h1 className="text-lg border-b">About</h1>
                <p className="text-dark-grey mt-2 border-b leading-7">This app's client side is based on React. It is full functional store with Stripe for payment processing, Express server and MongoDB. TailwindCSS is used for styling.</p>
            </div>
        </div>
    );
}

export default Footer;