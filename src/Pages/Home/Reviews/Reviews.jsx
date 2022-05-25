import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { SpinnerRoundOutlined } from "spinners-react";
import axiosPrivate from "../../../API/axiosPrivate";
import SingleReviewCard from "./SingleReviewCard";

const Reviews = () => {
  const { data, isLoading } = useQuery("reviews", () =>
    axiosPrivate.get("/reviews")
  );
  // console.log(data.data);

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
    <section className="my-10 py-7 md:mx-12 border rounded-md border-secondary">
      <h1 className="text-2xl text-center font-bold my-3">
        {" "}
        Customer Reviews{" "}
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {data?.data?.map((review) => (
          <SingleReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
