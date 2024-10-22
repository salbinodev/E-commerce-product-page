import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import CheckoutPage from './Components/CheckoutPage';
import Collections from './Pages/Collections';
import Header from './Components/Header'; // Import your Header component

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Render the Header component first */}
      <Header toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
