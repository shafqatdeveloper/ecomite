import React from "react";
import { FaShoppingCart, FaTruck, FaGift } from "react-icons/fa";
const Timeline = () => {
  return (
    <div className="flex flex-col gap-5 mt-16 w-full px-2 sm:px-5 md:px-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
              <FaShoppingCart />
            </div>
            <div
              className="absolute top-1/2 left-10 h-0.5 bg-black"
              style={{
                width:
                  window.innerWidth <= 320
                    ? "230px" // Extra-small screens (very small mobile)
                    : window.innerWidth < 390
                    ? "300px" // Small screens (slightly larger mobile)
                    : window.innerWidth < 440
                    ? "350px" // Small screens (slightly larger mobile)
                    : window.innerWidth < 500
                    ? "400px" // Small screens (slightly larger mobile)
                    : window.innerWidth < 540
                    ? "450px" // Mid-size mobile screens
                    : window.innerWidth < 570
                    ? "480px" // Mid-size mobile screens
                    : window.innerWidth < 595
                    ? "500px" // Mid-size mobile screens
                    : window.innerWidth < 605
                    ? "530px" // Mid-size mobile screens
                    : window.innerWidth < 640
                    ? "550px" // Mid-size mobile screens
                    : "370px", // Extra-large screens
              }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
              <FaTruck />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
            <FaGift />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full text-xs">
        <div className="mt-2 text-start w-32">
          <p className="font-semibold">Oct 25th</p>
          <p className="text-gray-500">Ordered</p>
        </div>

        <div className="mt-2 text-center w-32">
          <p className="font-semibold">Oct 26th - Oct 27th</p>
          <p className="text-gray-500">Order Ready</p>
        </div>

        <div className="mt-2 text-end w-32">
          <p className="font-semibold">Oct 27th - Oct 30th</p>
          <p className="text-gray-500 text-center">Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
