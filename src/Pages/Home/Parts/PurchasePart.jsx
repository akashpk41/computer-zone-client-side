import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SpinnerRoundOutlined } from "spinners-react";
import axiosPrivate from "../../../API/axiosPrivate";
import ProductCard from "./ProductCard";

const PurchasePart = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery("singleProduct", () =>
    axiosPrivate.get(`/parts/${id}`)
  );
  console.log(data?.data);

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
    <div className=" md:mx-12 my-10 ">
      <ProductCard part={data.data} />
    </div>
  );
};

export default PurchasePart;
