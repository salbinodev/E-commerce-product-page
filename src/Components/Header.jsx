import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "./../images/logo.svg";
import avatar from "./../images/image-avatar.png";

function Header({ toggleMobileMenu, isMobileMenuOpen }) {
    return (
        <>
            <div className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
                {/* Burger Menu for mobile */}
                <button className="block lg:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <AiOutlineClose className="text-3xl" />
                    ) : (
                        <AiOutlineMenu className="text-3xl" />
                    )}
                </button>

                <img src={logo} alt="Logo" />

                {/* Navigation menu for desktop */}
                <nav className="hidden lg:flex lg:items-center lg:justify-start lg:gap-4">
                    <ul className="flex flex-col lg:flex-row items-center justify-start gap-4">
                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                            <Link to="/collections">Collections</Link>
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                            <Link to="/men">Men</Link>
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                            <Link to="/women">Women</Link>
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="hidden lg:flex items-center justify-start gap-4">
                    <button>
                        <AiOutlineShoppingCart className="text-4xl" />
                    </button>
                    <img src={avatar} alt="Avatar" className="w-12" />
                </div>
            </div>

            {/* Mobile menu with transparent overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="flex justify-between p-8">
                        <button className="text-white" onClick={toggleMobileMenu}>
                            <AiOutlineClose className="text-3xl" />
                        </button>
                        <img src={logo} alt="Logo" />
                    </div>

                    <nav className="flex flex-col items-start p-8 space-y-6 text-white">
                        <ul className="flex flex-col items-start space-y-6 text-lg">
                            <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                <Link to="/collections">Collections</Link>
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                <Link to="/men">Men</Link>
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                <Link to="/women">Women</Link>
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Header;
