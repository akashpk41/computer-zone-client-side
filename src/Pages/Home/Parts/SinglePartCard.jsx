import React from "react";

const SinglePartCard = ({ part }) => {
  const { id, name, img, price, description, available, minimumOrder } = part;
  return (
    <div className="md:w-62 border-2 hover:scale-1.5 card  m-2 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img src={img} alt={name} className="rounded-xl w-full " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary font-bold "> {name} </h2>

        <h3 className="text-xl ">
          {" "}
          Price: <span className="text-green-600">{price} &#2547;</span>{" "}
          <h5 className="border-b-2 mt-1  mx-auto border-primary"></h5>
        </h3>

        <h3 className="text-base ">
          {" "}
          Available: <span className="text-secondary">{available} </span>{" "}
          <h5 className="border-b-2 mt-1  mx-auto border-primary"></h5>
        </h3>

        <h3 className="text-sm ">
          {" "}
          Min Order Quantity :{" "}
          <span className="text-error">{minimumOrder} </span>{" "}
          <h5 className="border-b-2 mt-1  mx-auto border-primary"></h5>
        </h3>

        <p className="text-base font-sans md:text-sm text-gray-700">
          {" "}
          {description.slice(0, 100) + "..."}{" "}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePartCard;
