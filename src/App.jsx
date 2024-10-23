import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import CheckoutPage from './Components/CheckoutPage';
import Collections from './Pages/Collections';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header'; // Import your Header component
import PaymentPage from "./Components/PaymentPage"

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
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/Payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
