import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import {
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#212529] text-white px-4 py-5 w-full">
      <div className="grid grid-cols-2 gap-5">
        <div className="text-sm">
          <div>
            <h1 className="text-2xl font-medium tracking-wide">Information</h1>
            <div className="bg-white mt-2 w-20 h-[3px]"></div>
          </div>
          <div className="flex flex-col gap-1 mt-5 font-medium">
            <Link className="hover:text-red-400" to={"/return-refund-policy"}>
              Return and Refund Policy
            </Link>
            <Link className="hover:text-red-400" to={"/shipping-policy"}>
              Shipping Policy
            </Link>
            <Link className="hover:text-red-400" to={"/privacy-policy"}>
              Privacy Policy
            </Link>
            <Link className="hover:text-red-400" to={"/terms-of-services"}>
              Terms of Services
            </Link>
          </div>
        </div>
        <div className="text-sm">
          <div>
            <h1 className="text-2xl font-medium tracking-wide">Quick Links</h1>
            <div className="bg-white mt-2 w-20 h-[3px]"></div>
          </div>
          <div className="flex flex-col gap-1 mt-5 font-medium">
            <Link className="hover:text-red-400" to={"/about-us"}>
              About Us
            </Link>
            <Link className="hover:text-red-400" to={"/faqs"}>
              Faqs
            </Link>
            <Link className="hover:text-red-400" to={"/contact-us"}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="text-sm">
          <div>
            <h1 className="text-2xl font-medium tracking-wide">follow us</h1>
            <div className="bg-white mt-2 w-20 h-[3px]"></div>
            <div className="mt-5 text-black flex items-center gap-4">
              <Link
                className="bg-[#FFFFFF] rounded-full flex items-center justify-center w-min p-1"
                to={"https://facebook.com"}
              >
                <BiLogoFacebook size={25} />
              </Link>
              <Link
                className="bg-[#FFFFFF] rounded-full flex items-center justify-center w-min p-1"
                to={"https://twitter.com"}
              >
                <FaXTwitter size={25} className="p-1" />
              </Link>
              <Link
                className="bg-[#FFFFFF] rounded-full flex items-center justify-center w-min p-1"
                to={"https://instagram.com"}
              >
                <FaInstagram className="p-1" size={25} />
              </Link>
              <Link
                className="bg-[#FFFFFF] rounded-full flex items-center justify-center w-min p-1"
                to={"https://linkedin.com"}
              >
                <FaLinkedinIn className="p-1" size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center pt-4">Email: support@mitex.co.in</h1>
    </div>
  );
};

export default Footer;
