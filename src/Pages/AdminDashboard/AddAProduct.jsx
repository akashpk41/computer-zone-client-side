import axiosPrivate from "../../API/axiosPrivate";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../Shared/Loading";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "55cb3954f54a76d16c6c0b682d1a78fd";

  const onSubmit = (data) => {
    const image = data.image[0];
    // console.log(data);

    const formData = new FormData();
    formData.append("image", image);
    // ! send image to the imgbb server and generate img link .
    fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const pcPartsData = {
            name: data.name,
            img,
            price: data.price,
            available: data.available,
            minimumOrder: data.minimumOrder,
            description: data.description,
          };

          // ? send parts data to the database .
          axiosPrivate.post("/parts", pcPartsData).then((res) => {
            if (res.data.acknowledged) {
              toast.success(" Product Added Successfully! ");

              reset();
            }
          });
        }
      });
  };

  return (
    <div className=" mx-2 md:mx-12 my-5 justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" md:w-4/5 md:mx-auto  shadow-2xl rounded-md card-body"
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
          <label htmlFor="image" className="btn btn-outline btn-primary my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900 mr-2 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>{" "}
            Upload Image
          </label>

          <input
            id="image"
            type="file"
            placeholder="Minimum Order Quantity"
            className="input  hidden w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: " Product Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
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
