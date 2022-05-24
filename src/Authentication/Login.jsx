import React from "react";

const Login = () => {
  return (
    <div
      class="hero min-h-screen "
      style={{
        backgroundImage: ` url(https://media.istockphoto.com/photos/streaming-live-esport-event-on-computer-at-home-picture-id1190641416?k=20&m=1190641416&s=170667a&w=0&h=9ZP7xe3tPG6bvQkTYXA2VFOLazE_m2rCyIVblXkB86U=)`,
      }}
    >
      <div class="hero-overlay   bg-opacity-90  "></div>
      <div class="hero-content  shadow-md text-center text-neutral-content">
        <div class="max-w-md">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
           <h1 className="text-xl text-center text-primary font-bold "> Please Login</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
