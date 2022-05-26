import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { price, buyerName, email } = order;
  // console.log();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

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
    setSuccess("");

    // ? confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: buyerName,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      // setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congrats! Your payment is completed.");

      //store payment on database
    }
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

      {success && (
        <div className=" text-center mt-5 ">
          <p className="text-green-500">{success} </p>
          <p>
            Your transaction Id:{" "}
            <span className="text-secondary text-sm font-bold">
              {transactionId}
            </span>{" "}
          </p>
        </div>
      )}

      <button
        type="submit"
        className=" btn btn-sm mt-3 btn-success text-white "
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
