import { useState } from "react";
import { data } from "../data";
import AddButton from "../utilities/AddButton";
import CommentSection from "../Components/CommentSection";
import { useNavigate } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';

function ProductPage() {
    const [products, setProduct] = useState(data);
    const [value, setValue] = useState(0);
    const { mainImage, largeImage } = products[value]; // Ensure 'largeImage' is part of your data
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    // console.log(mainImage, largeImage)

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const addToCart = () => {
        const selectedProduct = products[value];
        const cartItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: 125.00, // you can update the actual price here
            quantity,
        };
        setCart((prevCart) => [...prevCart, cartItem]);

        // Navigate to the checkout page and pass the cart data
        navigate('/checkout', { state: { cart: [...cart, cartItem] } });
    };

    return (
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 p-4 sm:p-8">
            <article>
                <div id="imageMagnifyer" className=" w-fit">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Main Product Image',
                            isFluidWidth: true,  
                            src: mainImage,  // Main product image
                            width: '100%'  // Ensure the width of the container adjusts correctly
                        },
                        largeImage: {
                            src: largeImage,  // Larger image for magnification
                            width: 900,  // Large image width (adjust for high resolution)
                            height: 750,  // Large image height 
                        },
                        isHintEnabled: true,
                        enlargedImageContainerDimensions: {
                            width: '180%',  
                            height: '100%'  
                        },
                        enlargedImagePosition: 'beside',  
                        lensStyle: { backgroundColor: 'rgba(0, 0, 0, 0.2)' }  
                    }} />
                </div>


                <ul className="flex items-center justify-start gap-3 flex-wrap mt-4">
                    {products.map((item, index) => (
                        <li
                            key={item.id}
                            onClick={() => setValue(index)}
                            className={`cursor-pointer ring-2 ${value === index ? 'ring-orange-500' : 'ring-transparent'} overflow-hidden rounded-lg`}
                        >
                            <img
                                src={item.thumbnail}
                                alt={`Thumbnail ${index}`}
                                className="w-16 sm:w-20 object-cover " />
                        </li>
                    ))}
                </ul>
            </article>

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
                        {AddButton(decreaseQuantity, '-')}
                        <span className="px-4 py-2 bg-transparent text-center w-full">{quantity}</span>
                        {AddButton(increaseQuantity, '+')}
                    </div>

                    <button
                        className="bg-orange-500 text-black w-full sm:w-[200px] sm:px-4 sm:py-1 rounded-lg text-lg font-bold"
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </article>

            {/* Interactive Comment Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Comments</h2>
                <CommentSection />
            </div>
        </section>
    );
}

export default ProductPage;
