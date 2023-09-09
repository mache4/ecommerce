import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from './pages/Home';

import Shop from './pages/Shop';
import Product from './pages/Product';
import Footer from './components/Footer';
// import Overlay from './components/Overlay';

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="App font-poppins overflow-hidden">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
