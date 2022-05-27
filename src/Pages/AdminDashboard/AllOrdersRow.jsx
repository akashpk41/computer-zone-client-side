import React from "react";

const AllOrdersRow = ({ order, index }) => {
  const { name, email } = order;
  return (
    <tr>
      <th>{index + 1} </th>
      <td>{name} </td>
      <td>{email} </td>
      <td>Blue</td>
      <td>
        {" "}
        <button
          // disabled={booking && booking.paid}
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
