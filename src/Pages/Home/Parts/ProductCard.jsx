import React, { useState } from "react";

const ProductCard = ({ part }) => {
  const [quantityError, setQuantityError] = useState("");
  const [quantity, setQuantity] = useState(0);
  const { _id, name, img, price, description, available, minimumOrder } = part;

  // ! get product data and send to the server
  const handlePlaceOrder = () => {
    //     cheeck if quantity less than minimum quantity

    if (quantity < minimumOrder) {
      setQuantityError(`Please order more than ${minimumOrder} products`);
    } else if (quantity > available) {
      setQuantityError(`Sorry currently ${quantity} products not available! `);
    } else {
      setQuantityError("");
    }
  };

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

        <p className="text-base  md:w-96 font-sans md:text-sm text-gray-700">
          {" "}
          {description}{" "}
        </p>

        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          placeholder={`Choose Minimum ${minimumOrder}`}
          className="input input-bordered input-primary w-full max-w-xs"
        />

        {quantityError && (
          <span className=" bg-red-100 p-2 rounded-md text-bold mt-2 text-red-500">
            {quantityError}
          </span>
        )}

        <div class="card-actions">
          <label
            onClick={handlePlaceOrder}
            for="purchase-part-modal"
            class="btn modal-button mt-3 mx-auto w-full btn-primary"
          >
            Place Order
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
