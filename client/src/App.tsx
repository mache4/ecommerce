import { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
// import Overlay from './components/Overlay';

import { OverlayContext } from './contexts/OverlayContext';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Footer from './components/Footer';

function App() {
    const [overlay, setOverlay] = useState(false);

    return (
        <OverlayContext.Provider value={{ overlay, setOverlay }}>
            <div className="App font-poppins">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                {/* <Overlay /> */}
                <Footer />
            </div>
        </OverlayContext.Provider>
    );
}

export default App;
