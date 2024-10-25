import React from "react";

const Headline = () => {
  return (
    <div className="bg-[#5FBB2A] text-white flex items-center justify-center">
      <marquee direction="left" scrollamount="8">
        <h1 className="py-3 font-semibold text-xl capitalize">
          <span className="font-semibold">WELCOME!</span> The best shop to
          remove mites from your household!!! Delivering Happiness, Health and
          Well Being for Your Family All Over INDIA!!!
        </h1>
      </marquee>
    </div>
  );
};

export default Headline;
