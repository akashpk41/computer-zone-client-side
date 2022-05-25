import axios from "axios";
import { useQuery } from "react-query";
import { SpinnerRoundOutlined } from "spinners-react";

import SinglePartCard from "./SinglePartCard";
import Loading from "../../../Pages/Shared/Loading";

const Parts = () => {
  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch("http://localhost:5000/parts").then((res) => res.json())
  );
  console.log(parts);

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
        All Computer Parts{" "}
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 ">
        {parts?.map((part) => (
          <SinglePartCard key={part.id} part={part} />
        ))}
      </div>
    </section>
  );
};

export default Parts;
