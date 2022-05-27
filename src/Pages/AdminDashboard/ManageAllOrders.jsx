import React from "react";
import { useQuery } from "react-query";
import { SpinnerRoundOutlined } from "spinners-react";
import axiosPrivate from "../../API/axiosPrivate";
import AllOrdersRow from "./AllOrdersRow";

const ManageAllOrders = () => {
  const { data, isLoading,refetch } = useQuery("allOrders", () =>
    axiosPrivate.get("/order")
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
    <div className="mx-10  ">
      <h1 className="text-center mb-3 font-semibold text-primary text-xl ">
        {" "}
        Manage All Orders{" "}
      </h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr className="text-center lg:text-left ">
              <th></th>
              <th>Product Name</th>
              <th>Buyer Email</th>
              <th>Status</th>
              <th>

              </th>
            </tr>
          </thead>

          <tbody>
            {data?.data.map((order, index) => (
              <AllOrdersRow key={order._id} refetch={refetch} index={index} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
