import React from "react";

const ProductCard = ({ part }) => {
  const { _id, name, img, price, description, available, minimumOrder } = part;
  return (
    <div class="card max-md-w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl w-70 " />
      </figure>
      <div class="card-body items-center text-center">
        <h2 className="card-title  font-bold "> {name} </h2>

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

        <p className="text-base  w-96 font-sans md:text-sm text-gray-700">
          {" "}
          {description}{" "}
        </p>

        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
