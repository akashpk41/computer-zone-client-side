import React, { useState, useEffect } from "react";
import SinglePartCard from "./SinglePartCard";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <section className="my-10 md:mx-12 border rounded-md border-success">
      <h1 className="text-2xl text-center font-bold my-3"> All Parts </h1>

      <div className="grid md:grid-cols-3">
        {parts.slice(0, 6).map((part) => (
          <SinglePartCard key={part.id} part={part} />
        ))}
      </div>
    </section>
  );
};

export default Parts;
