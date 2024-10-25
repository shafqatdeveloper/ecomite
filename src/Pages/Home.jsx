import React from "react";
import ImageCarousel from "../Components/Carousels/MiteCarousel";
import mt1 from "../assets/mt1.jpg";
import mt2 from "../assets/mt2.jpg";
import mt3 from "../assets/mt3.jpg";
import mt4 from "../assets/mt4.jpg";
import mt5 from "../assets/mt5.jpg";
import mt6 from "../assets/mt6.jpg";
import mt7 from "../assets/mt7.jpg";
import mt8 from "../assets/mt8.jpg";

const Home = () => {
  const images = [mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8];
  return (
    <div className="h-[200vh] w-full">
      <div className="w-full">
        <ImageCarousel images={images} />
      </div>
    </div>
  );
};

export default Home;
