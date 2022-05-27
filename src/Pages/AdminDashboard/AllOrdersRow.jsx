import React from "react";

import { toast } from "react-toastify";
import axiosPrivate from "../../API/axiosPrivate";

const AllOrdersRow = ({ order, index, refetch }) => {
  const { _id, name, email } = order;

  const shipOrder = (id) => {
    //   console.log(id);

    (async () => {
      try {
        const { data } = await axiosPrivate.put(`/order/${id}`);
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Order Approved !");
          refetch();
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  return (
    <tr>
      <th>{index + 1} </th>
      <td>{name} </td>
      <td>{email} </td>
      <td>
        {" "}
        {order && !order.paid && (
          <button className="btn btn-xs text-white btn-error">Not Paid</button>
        )}
        {order && order.status && (
          <button className="btn btn-xs btn-warning"> {order.status} </button>
        )}
      </td>
      <td>
        {" "}
        <button
          onClick={() => shipOrder(_id)}
          disabled={!order.paid || order.status === "shipped"}
          className="btn btn-xs  btn-success"
        >
          {" "}
          Ship Now
        </button>
      </td>
    </tr>
  );
};

export default AllOrdersRow;
