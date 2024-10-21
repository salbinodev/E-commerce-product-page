// ProductGallery.js
import React from 'react';

function ProductGallery({ products, value, setValue }) {
    const { mainImage } = products[value];

    return (
        <article>
            <img src={mainImage} alt="Main Product" className="w-full h-auto rounded-lg" />

            <ul className="flex items-center justify-start gap-3 flex-wrap mt-4">
                {products.map((item, index) => (
                    <li key={item.id} onClick={() => setValue(index)} className={`cursor-pointer ring-2 ${value === index ? 'ring-orange-500' : 'ring-transparent'} overflow-hidden rounded-lg`}>
                        <img src={item.thumbnail} alt={`Thumbnail ${index}`} className="w-16 sm:w-20 object-cover" />
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default ProductGallery;
