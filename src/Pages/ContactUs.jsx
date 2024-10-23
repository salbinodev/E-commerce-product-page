import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center min-h-screen bg-lime-200'>
            <div className='bg-white p-12 rounded-lg shadow-lg max-w-xl w-full'>
                <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
                <form className="space-y-6">
                    <div className='flex space-x-4'>
                        <div className='w-1/2'>
                            <label className="block mb-2">First Name*</label>
                            <input
                                type="text"
                                className="border border-gray-300 p-2 w-full rounded-lg"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div className='w-1/2'>
                            <label className="block mb-2">Last Name*</label>
                            <input
                                type="text"
                                className="border border-gray-300 p-2 w-full rounded-lg"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2">Email Address*</label>
                        <input
                            type="email"
                            className="border border-gray-300 p-2 w-full rounded-lg"
                            placeholder="example@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Query Type*</label>
                        <div className="flex space-x-4 mb-3">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="queryType"
                                    value="general"
                                    className="mr-2"
                                    required
                                />
                                General Inquiry
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="queryType"
                                    value="support"
                                    className="mr-2"
                                    required
                                />
                                Support
                            </label>
                        </div>
                        <div>
                            <label className="block mb-2">Message*</label>
                            <input
                                type="email"
                                className="border border-gray-300 p-12 w-full rounded-lg"
                                placeholder="write your message here.."
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg w-full"
                        >
                            Submit
                        </button>
                        <button
                            className="bg-gray-500 text-white px-4 py-3 rounded-lg mt-4 w-full"
                            onClick={() => navigate(-1)}
                        >
                            Go Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
