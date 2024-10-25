import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ImageCarousel from "../Components/Carousels/MiteCarousel";
import mt1 from "../assets/mt1.jpg";
import mt2 from "../assets/mt2.jpg";
import mt3 from "../assets/mt3.jpg";
import mt4 from "../assets/mt4.jpg";
import mt5 from "../assets/mt5.jpg";
import mt6 from "../assets/mt6.jpg";
import mt7 from "../assets/mt7.jpg";
import mt8 from "../assets/mt8.jpg";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import Reviews from "../Components/Reviews/Reviews";
import { AiOutlineClose } from "react-icons/ai";
import { FaMobileAlt, FaUser, FaMapMarkerAlt, FaHashtag } from "react-icons/fa";
import { State, Country } from "country-state-city";

const Home = () => {
  const [openBuyNowModal, setOpenBuyNowModal] = useState(false);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  const toggleBuyNowModal = () => {
    setOpenBuyNowModal(!openBuyNowModal);
  };

  const images = [mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8];
  const { ref: productDescRef, inView: productDescInView } = useInView({
    threshold: 0.07,
  });
  const { ref: reviewsRef, inView: reviewsInView } = useInView();

  const isButtonVisible = productDescInView || reviewsInView;

  useEffect(() => {
    const fetchStates = async () => {
      const indianStates = State.getStatesOfCountry("IN"); // 'IN' is the country code for India
      const stateOptions = indianStates.map((state) => ({
        value: state.isoCode,
        label: state.name,
      }));
      setStates(stateOptions);
    };

    fetchStates();
  }, []);

  const handleStateChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedState(selectedOption);
  };

  return (
    <div className="w-full relative">
      <div className="w-full px-2">
        <ImageCarousel toggleModal={toggleBuyNowModal} images={images} />
        <div ref={productDescRef}>
          <ProductDescription />
        </div>
        <div ref={reviewsRef}>
          <Reviews />
        </div>
      </div>
      {isButtonVisible && (
        <div>
          <button
            onClick={() => setOpenBuyNowModal(true)}
            className="fixed flex flex-col items-center left-1/2 -ml-[140px] sm:-ml-[190px] bottom-3 w-72 sm:w-96 text-center py-2.5 text-white font-bold md:text-lg rounded-md bg-[#198754] animate-shakeThreeTimes"
          >
            <span>👉 Order Now - Cash On Delivery</span>
            <span className="ml-2">499.00</span>
          </button>
        </div>
      )}
      <div
        className={
          openBuyNowModal
            ? "w-full sm:w-2/5 lg:w-2/6 transition-all duration-300 z-[9999] h-screen fixed top-0 left-1/2 -translate-x-1/2 bg-white"
            : "w-full sm:w-2/5 lg:w-2/6 transition-all duration-300 z-[9999] h-screen fixed top-0 left-[-100%] -translate-x-1/2 bg-white"
        }
      >
        <div className="bg-[#198754] w-full py-4">
          <h1 className="px-5 text-white">
            🛍️LIMITED TIME OFFER VALID FOR TODAY ONLY 😯⬇️
          </h1>
          <button
            onClick={() => setOpenBuyNowModal(false)}
            className="absolute top-3 right-3 text-gray-500 bg-gray-100 rounded-sm p-2 font-bold text-lg"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="px-4 mt-6">
          <div className="bg-gray-300 h-[1px] w-full mt-2"></div>
          <div className="flex py-3.5">
            <h1 className="flex-1 text-center text-lg sm:text-xl font-semibold">
              Eco Mite Spray- Pack of 2
            </h1>
            <span className=" text-lg sm:text-xl font-semibold">499.00</span>
          </div>
          <div className="bg-gray-300 h-[1px] w-full"></div>
        </div>
        <div className="mx-auto p-2 mt-5">
          <form>
            <div className="mb-4">
              <label className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaMobileAlt className="text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="Mobile"
                  required
                  className="w-full outline-none"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaUser className="text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full outline-none"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                <input
                  type="text"
                  required
                  placeholder="House No. & Colony/Apartment"
                  className="w-full outline-none"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                <input
                  type="text"
                  required
                  placeholder="Address & Landmark"
                  className="w-full outline-none"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaHashtag className="text-gray-600 mr-2" />
                <input
                  type="text"
                  required
                  placeholder="Pincode"
                  className="w-full outline-none"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-center border border-gray-300 rounded-lg p-2">
                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                <input
                  type="text"
                  required
                  placeholder="City"
                  className="w-full outline-none"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-center border border-gray-300 rounded-lg p-2">
                <select
                  className="w-full outline-none"
                  value={selectedState || ""}
                  required
                  onChange={handleStateChange}
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  {states.map((state, index) => (
                    <option key={index} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#198754] text-white p-2.5 rounded-md hover:bg-green-700"
              >
                Buy Now (Free COD) - Rs 499.00
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
