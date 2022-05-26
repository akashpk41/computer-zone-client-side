import React from "react";

const BookingRow = ({ booking, index }) => {
  const { name, price, email, phone } = booking;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name} </td>
      <td className="text-green-500 font-bold ">{price} </td>
      <td className="text-gray-700">{email} </td>
      <td className="text-gray-700">{phone} </td>

      <td> {booking.paid} </td>
      <td>
        {" "}
        <button className="btn btn-xs btn-error"> Delete </button>{" "}
      </td>
    </tr>
  );
};

export default BookingRow;
