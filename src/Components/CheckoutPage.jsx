import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CheckoutPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state?.cart || [];

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <span>{item.name}</span>
                            <span>Quantity: {item.quantity}</span>
                            <span>${item.price.toFixed(2)}</span>
                        </div>
                    ))}

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
                        <button
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4"
                            onClick={() => alert('Proceeding to payment...')}
                        >
                            Proceed to Payment
                        </button>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 ml-4"
                            onClick={() => navigate(-1)}
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CheckoutPage;
