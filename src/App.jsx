import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Header/Navbar";
import Headline from "./Components/Header/Headline";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const App = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full sm:w-3/5 lg:w-2/6">
        <Headline />
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
