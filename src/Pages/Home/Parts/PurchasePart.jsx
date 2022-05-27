import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { SpinnerRoundOutlined } from "spinners-react";
import axiosPrivate from "../../../API/axiosPrivate";
import BuyPartsModal from "./BuyPartsModal";
import ProductCard from "./ProductCard";

const PurchasePart = () => {
  const [modal, setModal] = useState(null);
  const { id } = useParams();

  const { data, isLoading } = useQuery(["singleProduct", id], () =>
    axiosPrivate.get(`/parts/${id}`)
  );

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
      <ProductCard setModal={setModal} part={data.data} />

     { modal && <BuyPartsModal  setModal={setModal} part={data.data} />}
    </div>
  );
};

export default PurchasePart;
