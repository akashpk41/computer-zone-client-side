import React from "react";
import { useQuery } from "react-query";
import { SpinnerRoundOutlined } from "spinners-react";
import axiosPrivate from "../../API/axiosPrivate";

const ManageAllOrders = () => {
  const { data, isLoading } = useQuery("user", () => axiosPrivate.get("/user"));

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
    <div className="mx-10  ">
      <h1 className="text-center mb-3 font-semibold text-primary text-xl ">
        {" "}
        Manage All Orders{" "}
      </h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
