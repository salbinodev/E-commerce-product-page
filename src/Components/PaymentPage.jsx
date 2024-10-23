// PaymentPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentPage() {
    const location = useLocation();
    const cart = location.state?.cart || [];
    const totalPrice = location.state?.totalPrice || 0;
    const navigate = useNavigate();

    const handlePayment = () => {
        // Implement payment processing logic here
        alert('Payment successful!');
    };

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Payment</h1>
            <div>
                <h2 className="text-2xl font-bold">Total Amount: ${totalPrice.toFixed(2)}</h2>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
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
            </div>
        </div>
    );
}

export default PaymentPage;
