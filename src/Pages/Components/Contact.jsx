import React from "react";

const Contact = () => {
  return (
    <div
      className="hero  h-[70vh]"
      style={{
        backgroundImage: ` url(https://cdn.pixabay.com/photo/2017/03/12/15/01/computer-2137265_960_720.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 className="text-2xl text-center text-black font-bold my-1">
                {" "}
                Contact With Us{" "}
              </h1>
              <div class="form-control">
                <input
                  type="text"
                  placeholder=" Your Email Address "
                  class="input input-bordered border-primary "
                />
              </div>

              <textarea
                class="textarea textarea-primary"
                placeholder="Drop A Line..."
              ></textarea>

              <div class="form-control mt-6">
                <button class="btn btn-outline btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
