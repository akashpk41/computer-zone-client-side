import React from "react";
import { Link } from "react-router-dom";

const BookingRow = ({ booking, index }) => {
  const { _id, name, price, email, phone } = booking;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name} </td>
      <td className="text-green-500 font-bold ">{price} </td>
      <td className="text-gray-700">{email} </td>
      <td className="text-gray-700">{phone} </td>

      <td>
        {booking && !booking.paid && (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-xs text-white btn-success"
          >
            Pay
          </Link>
        )}

        {booking && booking.paid && (
          <button className="btn btn-xs btn-secondary text-white ">
            {" "}
            paid{" "}
          </button>
        )}
      </td>
      <td>
        {" "}
        <button className="btn btn-xs btn-error"> Delete </button>{" "}
      </td>
    </tr>
  );
};

export default BookingRow;
