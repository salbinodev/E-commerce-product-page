import React from "react";

const AddButton = (onClick, label) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-300 px-4 py-2 rounded-lg text-lg font-bold"
        >
            {label}
        </button>
    );
};

export default AddButton;
