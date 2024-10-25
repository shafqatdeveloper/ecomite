import React from "react";
import rajeshwariRevImg from "../../assets/rajeshwari.png";
import radhikaRevImg from "../../assets/radhika.png";
import nehaRevImg from "../../assets/neha.png";
import maheshRevImg from "../../assets/mahesh.png";
import ankitRevImg from "../../assets/ankit.png";
import { Carousel } from "react-responsive-carousel";
import { FaStar } from "react-icons/fa6";

const Reviews = () => {
  const reviews = [
    {
      revImg: rajeshwariRevImg,
      reviewerName: "Rajeshwari",
      revComment:
        "My Kid's allergies are much better now. I love knowing it's eco friendly",
    },
    {
      revImg: nehaRevImg,
      reviewerName: "Neha",
      revComment:
        "My family loved this product very much. Even my Pets are happier",
    },
    {
      revImg: radhikaRevImg,
      reviewerName: "Radhika S",
      revComment: "Mitex is now a Staple in our Home",
    },
    {
      revImg: ankitRevImg,
      reviewerName: "Ankit",
      revComment: "Finally a natural Solution that Works!!!!!",
    },
    {
      revImg: maheshRevImg,
      reviewerName: "Mahesh",
      revComment: "This product has transformed our home to a better place!!!!",
    },
  ];
  return (
    <div>
      <h1 className="pt-1 pb-4 text-center">
        SOME REVIEWS FROM OUR HAPPY CUSTOMERS
      </h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={4000}
        swipeable
        transitionTime={800}
      >
        {reviews.map((review, index) => (
          <div key={index} className="border border-gray-300 rounded-md">
            <img src={review.revImg} alt="" />
            <div className="flex flex-col gap-3 items-center">
              <h1 className="mt-5 text-lg font-semibold">
                {review.reviewerName}
              </h1>
              <div className="flex items-center gap-0.5">
                <FaStar className="text-[#FFC107]" size={20} />
                <FaStar className="text-[#FFC107]" size={20} />
                <FaStar className="text-[#FFC107]" size={20} />
                <FaStar className="text-[#FFC107]" size={20} />
                <FaStar className="text-[#FFC107]" size={20} />
              </div>
              <p className="text-sm w-4/5 text-gray-500">{review.revComment}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
