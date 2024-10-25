import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { FaStar } from "react-icons/fa6";
import shieldImg from "../../assets/shield-icon.png";
import Timeline from "../Timeline/Timeline";

const ImageCarousel = ({ images }) => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={3000}
        swipeable
        transitionTime={800}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </Carousel>
      <h1 className="pt-12 text-2xl md:text-3xl lg:text-4xl font-medium pl-2">
        Eco Mite Spray- Pack of 2
      </h1>
      <h1 className="flex items-center gap-2 py-7 pl-2 md:pl-3.5 text-lg">
        4.65 <FaStar className="text-[#198754]" />
        <span>|</span>
        <span>9.35k Reviews</span>
      </h1>
      <h1 className="flex items-center gap-3 sm:gap-5 px-1 sm:px-2">
        <span className="text-xl sm:text-3xl md:text-4xl text-red-500 font-semibold">
          Rs. 499.00
        </span>{" "}
        <del className="text-lg sm:text-2xl">Rs. 899.00</del>
        <span className="bg-red-500 text-white font-medium rounded-md p-0.5 sm:p-1 text-xs sm:text-sm">
          save 42.00%
        </span>
      </h1>
      <div className="w-full px-5">
        <button className="mt-10 px-5 md:px-0 w-full text-center py-2.5 text-white font-bold md:text-lg rounded-full bg-[#198754] animate-shakeThreeTimes">
          Order Now - Cash On Delivery - 499.00
        </button>
      </div>
      <div>
        <Timeline />
      </div>

      <div className="pt-20">
        <img src={shieldImg} alt="Trust" />
      </div>
    </div>
  );
};

export default ImageCarousel;
