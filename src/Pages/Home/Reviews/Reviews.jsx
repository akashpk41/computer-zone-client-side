import React, { useState, useEffect } from "react";
import SingleReviewCard from "./SingleReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-10 py-7 md:mx-12 border rounded-md border-success">
      <h1 className="text-2xl text-center font-bold my-3">
        {" "}
        Customer Reviews{" "}
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {reviews.map((review) => (
          <SingleReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
