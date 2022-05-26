import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // ! get credit card information
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // ! set card configuration
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // ! set card error .
    setCardError(error?.message || "");
    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      {cardError && <p className="text-sm text-red-500 mt-3"> {cardError} </p>}

      <button
        type="submit"
        className=" btn btn-sm mt-3 btn-success text-white "
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
