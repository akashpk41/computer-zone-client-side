import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../API/axiosPrivate";
import auth from "../../firebase.init";

const AddAReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const ratingsData = {
      name: user.displayName,
      ratings: data.ratings,
      message: data.message,
      img: user.photoURL,
    };
    console.log(ratingsData);

    (async () => {
      try {
        const { data } = await axiosPrivate.post(`/reviews`, ratingsData);
        console.log(data);

        toast.success("Review Added!");
        reset();
      } catch (err) {
        console.log(err.message);
      }
    })();
  };

  return (
    <div className="mx-10  ">
      <h1 className="text-center mb-3 font-semibold text-primary text-xl ">
        {" "}
        Add a Review{" "}
      </h1>

      <div className="card card-compact w-full mx-auto mt-10 md:w-96 bg-base-100 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className=" text-center card-body">
          <input
            type="number"
            placeholder="Give A Rating"
            className="input input-bordered input-primary w-full max-w-xs"
            required
            min="1"
            max="5"
            {...register("ratings")}
          />
          <textarea
            className="textarea input-bordered  textarea-primary"
            placeholder="Drop A Line"
            required
            {...register("message")}
          ></textarea>
          <div className="card-actions justify-end">
            <button className="btn w-full btn-primary">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAReview;
