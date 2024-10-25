import React from "react";
import eco_gif_1 from "../../assets/ECO_GIF_3.webp";
import eco_gif_2 from "../../assets/ECO_GIF_2.webp";
import eco_gif_3 from "../../assets/ECO GIF 1.gif";
import whyChooseUsImg from "../../assets/mt3.jpg";
import Mt6 from "../../assets/mt6.jpg";
import { Carousel } from "react-responsive-carousel";

const ProductDescription = () => {
  const images = [eco_gif_3, eco_gif_2, eco_gif_1];
  return (
    <div className="">
      <div>
        <h1 className="text-lg font-bold tracking-wide">Product Desciption</h1>
        <p className="text-justify">
          <span className="font-bold">Mitex Eco Mite Spray</span> 🌿 is your
          ultimate solution for a cleaner, healthier home! 🏡 Say goodbye to
          dust mites and hello to fresh, allergen-free living. Formulated with
          natural ingredients 🌱, Mitex effectively tackles dust mites in
          mattresses, pillows, carpets, and upholstery - 🌍, Mitex Eco Mite
          Spray is your go-to for a mite-free home!
        </p>
        <img src={eco_gif_1} alt="" />
      </div>
      <div>
        <h2 className="text-lg mt-10 font-bold mb-3">Key Product Benefits:</h2>
        <ul className="space-y-1 pl-3 sm:pl-7 list-disc">
          <li className="">
            <span className="font-semibold">
              Eliminates Dust Mites 🕷️:{"  "}
            </span>
            Banish dust mites from your home and breathe easier with our
            powerful spray.
          </li>
          <li className="">
            <span className="font-semibold">Eco-Friendly Formula 🌱: </span>
            Made with natural ingredients, Mitex is gentle on the environment
            and tough on mites.
          </li>
          <li className="">
            <span className="font-semibold">Odor-Free 🌸: </span>
            Enjoy a fresh, clean home without any lingering smells.
          </li>
          <li className="">
            <span className="font-semibold">Easy to Use 🧴: </span>
            Just spray and go! Mitex works its magic effortlessly on all your
            household surfaces.
          </li>
          <li className="">
            <span className="font-semibold ">Long-Lasting Protection ⏳: </span>
            Keep dust mites at bay for weeks with regular u
          </li>
        </ul>
        <img src={eco_gif_2} alt="ECO GIF 2" className="mt-5" />
      </div>
      <div>
        <h1 className="text-lg font-semibold">How To Use</h1>
        <ul className="space-y-1 mt-4 pl-3 sm:pl-7 list-decimal">
          <li className="">
            <span className="font-semibold">Preparation 🧹:{"  "}</span>
            Start with clean, dry surfaces for best results.
          </li>
          <li className="">
            <span className="font-semibold">Application 🎯:{"  "}</span>
            Shake the bottle well, then hold it 6-8 inches from the surface.
            Spray evenly on mattresses, pillows, carpets, and upholstery.
          </li>
          <li className="">
            <span className="font-semibold">Drying 🕒:{"  "}</span>
            Let the spray air dry completely—no need to wipe! Mitex works as it
            dries.
          </li>
          <li className="">
            <span className="font-semibold">Reapply as Needed 🔄:{"  "}</span>
            For continuous protection, reapply every 2-3 weeks or after
            cleaning.
          </li>
        </ul>
        <img src={whyChooseUsImg} alt="WHY CHOOSE US" className="mt-10" />
      </div>
      <div>
        <h1 className="text-lg font-semibold mt-3 mb-6">
          Why Choose Mitex Eco Mite Spray?
        </h1>
        <p className="text-justify">
          Mitex Eco Mite Spray is more than just a dust mite eliminator—it’s a
          pledge to a healthier, greener home 🌍. Unlike traditional sprays
          filled with harsh chemicals, Mitex leverages nature’s power to cleanse
          your living spaces. By choosing Mitex, you’re not only safeguarding
          your family from allergens but also making an eco-conscious choice 🌿.
          Clean air, happy family—Mitex makes it possible! 😊
        </p>
        <h1 className=" mt-6 font-semibold">
          Take the first step towards a healthier, happier home! 🌟
        </h1>
        <p className="text-justify">
          Order Mitex Eco Mite Spray today and enjoy fresh, allergen-free
          living. 🏡
        </p>
        <img src={Mt6} alt="WHY CHOOSE US" />
      </div>
      <div>
        <div className="bg-[#5FBB2A] mt-3 mb-2 text-white flex items-center justify-center">
          <marquee direction="left" scrollamount="5">
            <h1 className="font-semibold text-lg py-1 capitalize">
              Mitex's Eco Mite Spray Is The Best Choice For Your Home!!
            </h1>
          </marquee>
        </div>
      </div>
      <div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={5000}
          swipeable
          transitionTime={600}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDescription;
