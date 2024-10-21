import React from "react";

function Collection() {
    return (
        <div className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Our Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Item 1"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="text-xl font-bold mt-4">Item 1</h2>
                    <p className="text-gray-600 mt-2">
                        This is a description of the first item in the collection.
                    </p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4">
                        View Item
                    </button>
                </div>

                {/* More Collection Items */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Item 2"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="text-xl font-bold mt-4">Item 2</h2>
                    <p className="text-gray-600 mt-2">
                        This is a description of the second item in the collection.
                    </p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4">
                        View Item
                    </button>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Item 3"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                    <h2 className="text-xl font-bold mt-4">Item 3</h2>
                    <p className="text-gray-600 mt-2">
                        This is a description of the third item in the collection.
                    </p>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4">
                        View Item
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Collection;
