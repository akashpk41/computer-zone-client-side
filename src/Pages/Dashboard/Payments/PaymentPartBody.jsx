import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const PaymentPartBody = ({ product }) => {
  const [user] = useAuthState(auth);
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-center ">
          {" "}
          Hello,{" "}
          <span className="font-semibold text-orange-600">
            {user.displayName}{" "}
          </span>{" "}
        </h2>
        <p>
          {" "}
          Pay for : <span className=" font-bold ">{product.name}</span>{" "}
        </p>
        <p>
          {" "}
          Please Pay :{" "}
          <span className="text-success font-bold ">
            {product.price}&#2547;
          </span>{" "}
        </p>

      </div>
    </div>
  );
};

export default PaymentPartBody;
