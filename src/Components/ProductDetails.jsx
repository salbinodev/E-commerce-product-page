// ProductDetails.js
import React from 'react';

function ProductDetails({ quantity, increaseQuantity, decreaseQuantity }) {
    return (
        <article>
            <h1 className="text-2xl font-bold mb-4">Fall Limited Edition Sneakers</h1>
            <p className="text-gray-700 mb-6">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="flex items-center gap-4 mb-4">
                <span className="text-xl font-bold">$125.00</span>
                <span className="text-gray-500 line-through">$250.00</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-1 font-bold">
            
                <div className="flex items-center justify-between rounded-lg bg-gray-300 w-full sm:w-[200px] sm:px-4 sm:py-1">
                    <button onClick={decreaseQuantity} className="px-6 py-3 text-gray-700">-</button>
                    <span className="px-4 py-2 bg-transparent text-center w-full">{quantity}</span>
                    <button onClick={increaseQuantity} className="px-6 py-3 text-gray-700">+</button>
                </div>

                <button className="bg-orange-500 text-black w-full sm:w-[200px] sm:px-4 sm:py-1 rounded-lg text-lg font-bold">
                    Add to Cart
                </button>
            </div>
        </article>
    );
}

export default ProductDetails;
