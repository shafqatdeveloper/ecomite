import React, { useState } from "react";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFolding, setIsFolding] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsFolding(true); // Trigger fold animation
      setTimeout(() => {
        setIsMenuOpen(false); // Close menu after fold animation completes
        setIsFolding(false); // Reset folding state
      }, 500); // Match duration of fold animation (0.5s)
    } else {
      setIsMenuOpen(true); // Open menu with unfold animation
    }
  };

  return (
    <div className="w-full py-0.5 px-2 bg-gray-100 flex items-center justify-between shadow-md shadow-black/10 sticky top-0 z-30">
      <button onClick={toggleMenu}>
        <FiMenu size={29} className="text-gray-500" />
      </button>
      <img src={logoImg} alt="LOGO" className="w-24 h-auto" />
      <button>
        <RiShoppingBag4Line size={29} className="text-gray-500" />
      </button>
      <div
        className={`fixed top-0 left-0 flex items-center justify-center w-full h-screen z-50 transition-all duration-200 ${
          isMenuOpen ? (isFolding ? "fold-menu" : "unfold-menu") : "hidden"
        }`}
      >
        <div className="w-full sm:w-3/5 lg:w-2/5 bg-white h-full relative">
          <button className="absolute top-10 right-5" onClick={toggleMenu}>
            <AiOutlineClose size={30} />
          </button>
          <div className="pt-20 pl-5 flex flex-col gap-6 text-4xl font-semibold">
            <Link to={"/about-us"}>About Us</Link>
            <Link to={"/faqs"}>Faqs</Link>
            <Link to={"/contact-us"}>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
