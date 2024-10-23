// PaymentPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state?.cart || [];
    const totalPrice = location.state?.totalPrice || 0;

    const handlePayment = () => {
        // Add your payment processing logic here (e.g., call a payment API)
        alert('Payment processed successfully!');
        // Optionally redirect to a confirmation or thank-you page
        // navigate('/thank-you');
    };

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8 ">Payment</h1>
            <div>
                <h2 className="text-2xl font-bold">Total Amount: ${totalPrice.toFixed(2)}</h2>
                <form className="mt-4">
                    {/* Add payment form fields here */}
                    <div>
                        <label className="block mb-2">Credit Card Number:</label>
                        <input type="text" className="border border-gray-300 p-2 w-full rounded-lg" placeholder="123-567-9056" />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2">Expiration Date:</label>
                        <input type="text" className="border border-gray-300 p-2 w-full rounded-lg" placeholder="MM/YY" />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2">CVC:</label>
                        <input type="text" className="border border-gray-300 p-2 w-full rounded-lg" placeholder="123" />
                    </div>
                    <button
                        type="button"
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4"
                        onClick={handlePayment}
                    >
                        Confirm Payment
                    </button>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 ml-4"
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PaymentPage;
