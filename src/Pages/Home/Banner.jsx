import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <header>
      <div
        className="hero  h-[70vh]"
        style={{ backgroundImage: ` url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-80  "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              data-aos="fade-right"
              data-aos-duration="800"
              className="mb-5 text-5xl font-bold text-primary "
            >
              Unzip A Computer.
            </h1>
            <p
              data-aos="fade-left"
              data-aos-duration="700"
              className="mb-5 text-gray-200 "
            >
              The solution that you will truly love. We are here to make the
              computer works for you. We can give your pc some more years to
              live. Giving your pc a new life.
            </p>
            <button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1300"
              className="btn btn-primary"
            >
              Explore Now{" "}
              <ArrowNarrowRightIcon className="h-5 w-5 ml-1 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
