import React, { useState } from "react";

function Cart({ cartItems, updateQuantity, removeFromCart, checkout }) {
    const calculateTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <section className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-4">
                            <div>
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                <p className="text-gray-500">Price: ${item.price}</p>
                            </div>
                            <div className="flex items-center">
                                <button
                                    className="bg-gray-300 px-3 py-1"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    -
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button
                                    className="bg-gray-300 px-3 py-1"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                            <button
                                className="text-red-500 ml-4"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="mt-6">
                        <h3 className="text-xl font-bold">Total: ${calculateTotalPrice().toFixed(2)}</h3>
                        <button
                            className="bg-orange-500 text-white px-4 py-2 mt-4 rounded"
                            onClick={checkout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cart;
