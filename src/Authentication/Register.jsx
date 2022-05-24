import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const [password, setPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(passwordError);

    // ! check if two password not match .
    if (data.password !== data.confirmPassword) {
      return setPasswordError("Your Two Password Not Match.");
    }
    setPasswordError("");
  };

  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: ` url(https://s3.amazonaws.com/pbblogassets/uploads/2020/08/05070749/Recording-video-games-on-PC.jpg)`,
      }}
    >
      <div className="hero-overlay   bg-opacity-90  "></div>
      <div className="hero-content  w-full  text-center text-neutral-content">
        <div className="max-w-md mx-auto w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-xl mb-2 text-center text-primary font-bold ">
                {" "}
                Please Register
              </h1>

              <div className="form-control relative ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input text-black input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
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
                  type="email"
                  placeholder="Your Email"
                  className="input text-black input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control  relative w-full max-w-xs">
                <input
                  type={password ? "text" : "password"}
                  placeholder="Password"
                  className="input text-black input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />

                <span
                  onClick={() => setPassword(!password)}
                  className="absolute top-3 cursor-pointer  right-2"
                >
                  {" "}
                  {password ? (
                    <EyeOffIcon className="h-5 w-5 ml-1 text-gray-900" />
                  ) : (
                    <EyeIcon className="h-5 w-5 ml-1 text-gray-900" />
                  )}{" "}
                </span>

                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control  relative w-full max-w-xs">
                <input
                  type={password ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="input text-black input-bordered w-full max-w-xs"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                  })}
                />

                <span
                  onClick={() => setPassword(!password)}
                  className="absolute top-3 cursor-pointer  right-2"
                >
                  {" "}
                  {password ? (
                    <EyeOffIcon className="h-5 w-5 ml-1 text-gray-900" />
                  ) : (
                    <EyeIcon className="h-5 w-5 ml-1 text-gray-900" />
                  )}{" "}
                </span>

                {passwordError && (
                  <span className=" bg-red-100 p-2 rounded-md text-bold mt-2 text-red-500">
                    {passwordError}
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
