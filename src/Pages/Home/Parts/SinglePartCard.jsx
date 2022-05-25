import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const SinglePartCard = ({ part }) => {
  const { _id, name, img, price, description, available, minimumOrder } = part;
  return (
    <div className="md:w-62 lg:w-auto space-y-2 border-2 hover:scale-1.5 card  m-2 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img
          src={img}
          alt={name}
          className="md:cursor-pointer rounded-xl w-full "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="card-title text-primary font-bold "
        >
          {" "}
          {name}{" "}
        </h2>

        <h3 data-aos="fade-left" data-aos-duration="700" className="text-xl ">
          {" "}
          Price: <span className="text-green-600">{price} &#2547;</span>{" "}
          <h5 className="border-b-2 mt-1  mx-auto border-primary"></h5>
        </h3>

        <h3
          data-aos="fade-right"
          data-aos-duration="800"
          className="text-base "
        >
          {" "}
          Available: <span className="text-secondary">{available} </span>{" "}
          <h5 className="border-b-2 mt-1  mx-auto border-primary"></h5>
        </h3>

        <h3 data-aos="fade-left" data-aos-duration="1000" className="text-sm ">
          {" "}
          Min Order Quantity :{" "}
          <span className="text-error">{minimumOrder} </span>{" "}
          <h5 className="border-b-2 mt-1  mx-auto border-primary"></h5>
        </h3>

        <p
          data-aos="fade-right"
          data-aos-duration="1100"
          className="text-base font-sans md:text-sm text-gray-700"
        >
          {" "}
          {description.slice(0, 100) + "..."}{" "}
        </p>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="card-actions"
        >
          <Link to={`/purchase/${_id}`} className="btn btn-primary">
            Buy Now{" "}
            <ArrowNarrowRightIcon className="h-5 w-5 ml-1 text-gray-900" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePartCard;
