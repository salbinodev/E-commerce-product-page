import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ProductPage from "./Pages/ProductPage";
import Collections from './Pages/Collections';

function App() {
  return (
    <div>
      <Header />  {/* Your Header component */}

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </div>
  );
}

export default App;
