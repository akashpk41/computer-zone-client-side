import React, { useEffect, useState } from "react";
import axiosPrivate from "../../API/axiosPrivate";

import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";

import { toast } from "react-toastify";

import { useForm } from "react-hook-form";

const AddUserInfo = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      name: user.displayName,
      email: user.email,
      country: data.country,
      education: data.education,
      linkedIn: data.linkedIn,
      phone: data.phone,
    };
    // console.log(userInfo);

    (async () => {
      try {
        const { data } = await axiosPrivate.post(`/user/profile`, userInfo);
        // console.log(data);
        if (data.acknowledged) {
          toast.success(" Information Added! ");
          reset();
          window.location.reload();
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  return (
    <div className="hero  ">
      <div className="hero-overlay   rounded-md "></div>
      <div className="hero-content rounded-md  my-10 w-full  text-center text-neutral-content">
        <div className="max-w-md mx-auto w-full">
          <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserInfo;
