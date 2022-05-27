import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { SpinnerRoundOutlined } from "spinners-react";
import axiosPrivate from "../../API/axiosPrivate";
import auth from "../../firebase.init";
import BookingRow from "./BookingRow";
import DeleteBookingModal from "./Modal/DeleteBookingModal";
import DeleteProductModal from "./Modal/DeleteProductModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const [modal, setModal] = useState(null);
  const { data, isLoading, refetch } = useQuery("booking", () =>
    axiosPrivate.get(`/booking?email=${user.email}`)
  );
  // console.log(booking.data);

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
        My Orders{" "}
      </h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center  ">
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Email Address </th>
              <th> Phone </th>
              <th> </th>
              <th> Status </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {data.data.map((data, index) => (
              <BookingRow
                index={index}
                key={data._id}
                booking={data}
                setModal={setModal}
              />
            ))}
          </tbody>
        </table>
      </div>
      {modal && <DeleteBookingModal refetch={refetch} modal={modal} />}
    </div>
  );
};

export default MyOrders;
