import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { SpinnerRoundOutlined } from "spinners-react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import PaymentPartBody from "./PaymentPartBody";
import axiosPrivate from "../../../API/axiosPrivate";

const stripePromise = loadStripe(
  "pk_test_51L3Z2yKqOwHYefqRYLaeHILu6yn1EoiuIkznDJzHSbsImNE2ytzQuOPXy3eiwkfnFyNlzAQxHdDTjYXE1P6SE6bi00siBVw0iI"
);

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["booking", id], () =>
    axiosPrivate.get(`/booking/${id}`)
  );
  // console.log(data?.data);

  if (isLoading) {
    return (
      <SpinnerRoundOutlined
        size={100}
        color="red"
        className="w-48 h-48 text-primary text-center mx-auto"
      />
    );
  }

  return (
    <div className="mx-auto ">
      <PaymentPartBody product={data.data} />

      <div className="card my-12 md:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm  order={data.data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
