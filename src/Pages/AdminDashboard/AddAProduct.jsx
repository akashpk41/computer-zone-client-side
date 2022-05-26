import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" mx-2 md:mx-12 text-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" md:w-4/5 md:mx-auto shadow-2xl rounded-md card-body"
      >
        <h1 className="text-xl mb-2 text-center text-success font-bold ">
          {" "}
          Add Product
        </h1>

        <div className="form-control relative ">
          <input
            type="text"
            placeholder="Product Name"
            className="input text-black input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Product Name is Required",
              },
            })}
          />

          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control placeholder-gray-800 w-full max-w-xs">
          <input
            type="number"
            placeholder="Product Price"
            className="input text-black input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control placeholder-gray-800 w-full max-w-xs">
          <input
            type="number"
            placeholder="Available Quantity"
            className="input text-black input-bordered w-full max-w-xs"
            {...register("available", {
              required: {
                value: true,
                message: "Available Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.available?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.available.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control placeholder-gray-800 w-full max-w-xs">
          <input
            type="number"
            placeholder="Minimum Order Quantity"
            className="input text-black input-bordered w-full max-w-xs"
            {...register("minimumOrder", {
              required: {
                value: true,
                message: "Minimum Order Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.minimumOrder?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.minimumOrder.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control placeholder-gray-800 w-full max-w-xs">
          <textarea
            placeholder=" Add Description About Product "
            className="textarea input-bordered "
            {...register("description", {
              required: {
                value: true,
                message: "Product Description is Required",
              },
            })}
          ></textarea>

          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <button className="btn md:w-80 btn-primary">Add</button>
      </form>
    </div>
  );
};

export default Register;
