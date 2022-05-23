import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const SingleReviewCard = ({ review }) => {
  const { name, img, ratings, message } = review;
  return (
    <div className="card  relative md:w-62 m-2 bg-violet-200 text-primary-content">
      <div className="card-body p-3  ">
        <div className=" mx-auto   ">
          <div className="w-16 mask mask-hexagon">
            <img className="md:cursor-pointer"
              src={
                img ||
                "https://ttwo.dk/wp-content/uploads/2017/08/person-placeholder.jpg"
              }
            />
          </div>
        </div>

        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-xl font-bold text-center"
        >
          {name}{" "}
        </h2>
        <p
          data-aos="fade-left"
          data-aos-duration="700"
          className="text-center flex justify-center font-bold text-sm"
        >
          {" "}
          Ratings : {ratings}/5{" "}
          <span className="inline">
            <StarIcon className="h-5 w-5 ml-1 text-yellow-500" />
          </span>{" "}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-center text-sm"
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default SingleReviewCard;
