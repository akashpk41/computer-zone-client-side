import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="hero h-[80vh]"
      style={{
        backgroundImage: ` url(https://c.tenor.com/JIS_KDKKsgYAAAAd/guaton-computadora.gif)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-8xl text-error font-serif italic font-bold">
            {" "}
            404{" "}
          </h1>
          <p className="mb-5 text-2xl text-primary ">
            We are sorry, the page you requested cannot be found. <br />
            <span className=" text-sm    text-warning">
              The URL may be misspelled or the page you're looking for is no
              longer available.
            </span>
          </p>
          <Link to='/' className="btn  btn-success   ">Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
