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
  "pk_test_51L1OYBHxIsHeHwQwHe19hg4GTXtNXNcWeALrHRJOEGg6bRcwJKMyaGmd4F4EJCw6Je8nP5pNfrpdZs9cGXYYrd73006SXG4CFq"
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
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
