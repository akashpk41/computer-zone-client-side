import React from "react";
import { Link } from "react-router-dom";

const BookingRow = ({ booking, index, setModal }) => {
  const { _id, name, price, email, phone, transactionId } = booking;
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
          <div>
            <button className="btn btn-xs btn-secondary text-white ">
              paid
            </button>

            <p className="flex flex-col">
              Transaction Id:{" "}
              <span className="text-secondary text-sm font-bold">
                {transactionId}
              </span>{" "}
            </p>
          </div>
        )}
      </td>
      <td>
        {booking && booking.status && (
          <button className="btn btn-xs btn-warning"> {booking.status} </button>
        )}
      </td>
      <td>
        {" "}
        <label
          for="delete-confirm-modal"
          onClick={() => setModal(booking)}
          disabled={booking && booking.paid}
          className="btn btn-xs btn-error"
        >
          {" "}
          Cancel{" "}
        </label>{" "}
      </td>
    </tr>
  );
};

export default BookingRow;
