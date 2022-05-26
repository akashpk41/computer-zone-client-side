import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../../API/axiosPrivate";
import auth from "../../../firebase.init";

const BuyPartsModal = ({ part }) => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const { name, price } = part;

  const onSubmit = (data) => {
    const bookingData = {
      name,
      buyerName: user.displayName,
      email: user.email,
      price,
      address: data.address,
      phone: data.number,
    };
    // console.log(bookingData);

    (async () => {
      try {
        const { data } = await axiosPrivate.post(`/booking`, bookingData);

        toast.success("Booking Success!");
        reset();
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  return (
    <div className="">
      {/* // <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="purchase-part-modal"
        className="modal-toggle"
      />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <label
            for="purchase-part-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-center text-secondary text-lg">
            {name}
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="justify-center text-center mt-3 space-y-2"
          >
            <input
              type="text"
              value={user.displayName}
              disabled
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              value={user.email}
              disabled
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Your Address"
              className="input input-bordered input-primary w-full max-w-xs"
              {...register("address")}
              required
            />
            <input
              type="number"
              placeholder="Your Phone Number"
              className="input input-bordered input-primary w-full max-w-xs"
              min={12}
              required
              {...register("number")}
            />

            <button
              for="purchase-part-modal"
              className="btn modal-button mt-3 mx-auto w-80 btn-primary"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyPartsModal;
