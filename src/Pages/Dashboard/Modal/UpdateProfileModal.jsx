import React from "react";

import axiosPrivate from "../../../API/axiosPrivate";

import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const UpdateProfileModal = ({ setModal, userData }) => {
  const [user] = useAuthState(auth);
  const { email } = user;

  const { _id } = userData;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const updatedUserInfo = {
      country: data.country,
      education: data.education,
      linkedIn: data.linkedIn,
      phone: data.phone,
    };
    // console.log(userInfo);

    (async () => {
      try {
        const { data } = await axiosPrivate.put(
          `/user/profile/${email}`,
          updatedUserInfo
        );
        console.log(data);
        if (data.modifiedCount > 0 ) {
          toast.success(" Information Updated! ");
          reset();
          // window.location.reload();
        }
        window.location.reload();
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  return (
    <div>
      <input
        type="checkbox"
        id="update-profile-modal"
        className="modal-toggle"
      />
      <div className="modal sm:modal-middle">
        <div className="modal-box text-center ">
          <label
            for="update-profile-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Update Your Information</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-xl mb-2 text-center text-primary font-bold ">
              {" "}
              Add More Info
            </h1>

            <div className="form-control relative ">
              <input
                type="text"
                placeholder="Your Country "
                className="input text-black input-bordered w-full max-w-xs"
                {...register("country", {
                  required: {
                    value: true,
                    message: "Country Name is Required",
                  },
                })}
              />

              <label className="label">
                {errors.country?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.country.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control relative ">
              <input
                type="text"
                placeholder="Education Status"
                className="input text-black input-bordered w-full max-w-xs"
                {...register("education", {
                  required: {
                    value: true,
                    message: "Please Add Education Status ",
                  },
                })}
              />

              <label className="label">
                {errors.education?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.education.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control relative ">
              <input
                type="text"
                placeholder="Linkdin profile link"
                className="input text-black input-bordered w-full max-w-xs"
                {...register("linkedIn", {
                  required: {
                    value: true,
                    message: "Add LinkdIn profile",
                  },
                })}
              />

              <label className="label">
                {errors.linkedIn?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.linkedIn.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control relative ">
              <input
                type="number"
                placeholder="Your  Phone Number"
                className="input text-black input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Please Add Phone Number",
                  },
                })}
              />

              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control mt-3">
              <button  for="update-profile-modal" className="btn btn-primary">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
