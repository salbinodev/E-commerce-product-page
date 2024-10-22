import React, { useState } from "react";
import { data } from "../data"; // Assuming this contains your product data

function Collection() {
    const [products] = useState(data);

    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Our Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.slice(0, 3).map((item, index) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src={item.thumbnail}
                            alt={`Item ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-bold mt-4">{`Item ${index + 1}`}</h2>
                        <p className="text-gray-600 mt-2">
                            {item.description || `This is a description of Item ${index + 1}.`}
                        </p>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4">
                            View Item
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collection;

