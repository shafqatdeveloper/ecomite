import React from "react";
import { FaShoppingCart, FaTruck, FaGift } from "react-icons/fa";
const Timeline = () => {
  return (
    <div className="flex flex-col gap-5 mt-8 w-full px-2 sm:px-5 md:px-10">
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
                    ? "222px" // Extra-small screens (very small mobile)
                    : window.innerWidth <= 360
                    ? "252px" // Extra-small screens (very small mobile)
                    : window.innerWidth < 390
                    ? "292px" // Small screens (slightly larger mobile)
                    : window.innerWidth < 440
                    ? "342px" // Small screens (slightly larger mobile)
                    : window.innerWidth < 500
                    ? "392px" // Small screens (slightly larger mobile)
                    : window.innerWidth < 540
                    ? "442px" // Mid-size mobile screens
                    : window.innerWidth < 570
                    ? "472px" // Mid-size mobile screens
                    : window.innerWidth < 595
                    ? "492px" // Mid-size mobile screens
                    : window.innerWidth < 605
                    ? "522px" // Mid-size mobile screens
                    : window.innerWidth < 640
                    ? "542px" // Mid-size mobile screens
                    : window.innerWidth < 690
                    ? "292px" // Mid-size mobile screens
                    : window.innerWidth < 730
                    ? "312px" // Mid-size mobile screens
                    : window.innerWidth < 830
                    ? "342px" // Mid-size mobile screens
                    : window.innerWidth < 900
                    ? "372px" // Mid-size mobile screens
                    : window.innerWidth < 950
                    ? "402px" // Mid-size mobile screens
                    : window.innerWidth < 1000
                    ? "432px" // Mid-size mobile screens
                    : window.innerWidth < 1024
                    ? "462px" // Mid-size mobile screens
                    : window.innerWidth < 1080
                    ? "198px" // Mid-size mobile screens
                    : window.innerWidth < 1230
                    ? "242px" // Mid-size mobile screens
                    : window.innerWidth < 1315
                    ? "272px" // Mid-size mobile screens
                    : window.innerWidth < 1400
                    ? "302px" // Mid-size mobile screens
                    : window.innerWidth < 1490
                    ? "332px" // Mid-size mobile screens
                    : window.innerWidth < 1580
                    ? "362px" // Mid-size mobile screens
                    : window.innerWidth < 1670
                    ? "398px" // Mid-size mobile screens
                    : window.innerWidth < 1760
                    ? "422px" // Mid-size mobile screens
                    : window.innerWidth < 1850
                    ? "452px" // Mid-size mobile screens
                    : window.innerWidth < 1940
                    ? "482px" // Mid-size mobile screens
                    : window.innerWidth < 2030
                    ? "512px" // Mid-size mobile screens
                    : window.innerWidth < 2120
                    ? "542px" // Mid-size mobile screens
                    : window.innerWidth < 2210
                    ? "572px" // Mid-size mobile screens
                    : window.innerWidth < 2300
                    ? "602px" // Mid-size mobile screens
                    : window.innerWidth < 2390
                    ? "632px" // Mid-size mobile screens
                    : window.innerWidth < 2480
                    ? "662px" // Mid-size mobile screens
                    : window.innerWidth < 2570
                    ? "692px" // Mid-size mobile screens
                    : window.innerWidth < 2660
                    ? "722px" // Mid-size mobile screens
                    : window.innerWidth < 2750
                    ? "692px" // Mid-size mobile screens
                    : window.innerWidth < 2840
                    ? "782px" // Mid-size mobile screens
                    : "312px", // Extra-large screens
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
