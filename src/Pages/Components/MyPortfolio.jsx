import React from "react";
import img1 from "../../images/projects/rotten-potatoes.png";
import img2 from "../../images/projects/pure-smile.png";
import img3 from "../../images/projects/car-hub.png";

const MyPortfolio = () => {
  return (
    <div className="card my-10 py-7 md:mx-12  border rounded-md border-secondary shadow-xl">
      <h1 className="text-2xl text-center font-bold text-primary mb-3">
        {" "}
        My Portfolio{" "}
      </h1>
      <div className="card-body text-center ">
        <h2 className="text-2xl font-semibold text-center">
          {" "}
          Name : <span className="font-bold">Akash PK</span>{" "}
        </h2>
        <h2 className="text-2xl font-semibold text-center">
          {" "}
          Email : <span className="font-bold">akashpk84100@gmail.com</span>{" "}
        </h2>
        {/* skills section */}
        <div>
          <h1 className="text-2xl text-center text-primary font-bold my-3">
            {" "}
            My Skills{" "}
          </h1>

          <div className=" my-3">
            <span className="text-xl  text-secondary font-bold">
              {" "}
              Frontend :{" "}
            </span>
            <span className="">
              {" "}
              HTML, CSS, JAVASCRIPT, React, Bootstrap, Tailwind{" "}
            </span>
          </div>

          <div className=" my-3">
            <span className="text-xl  text-secondary font-bold">
              {" "}
              Backend :{" "}
            </span>
            <span className="">
              {" "}
              Node JS, Express JS, MongoDB, Firebase, JWT,{" "}
            </span>
          </div>

          <div className=" my-3">
            <span className="text-xl  text-secondary font-bold"> Tools : </span>
            <span className="">
              {" "}
              Github, Figma, Postman, Axios, NPM, Chrome Dev Tool, ReactRouter,
              React Query , Netlify & Heroku
            </span>
          </div>
        </div>

        {/* latest project */}
        <div>
          <h1 className="text-2xl text-center text-primary font-bold my-3">
            {" "}
            My Latest Projects{" "}
          </h1>

          <div className="grid md:grid-cols-3 gap-y-5 md:gap-3  ">
            <div className="card max:md-w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img1} alt="Shoes" />
              </figure>
              <div className="card-body text-center ">
                <h2 className="card-title">
                  Rotten Potatoes
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-sm text-gray-700">
                  This is a movie review website where you can see other people
                  opinion about a movie and also share your opinion.
                </p>
                <div className="card-actions flex justify-center">
                  <a
                    href="https://rotten-potatoe.netlify.app/"
                    target="_blank"
                    rel="noopener"
                    className="badge border hover:scale-110 border-secondary badge-outline"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/akashpk41/rotten-potatoes-movie-reviews"
                    target="_blank"
                    rel="noopener"
                    className="badge border hover:scale-110 border-secondary badge-outline"
                  >
                    Client Side Code
                  </a>
                </div>
              </div>
            </div>

            <div className="card max:md-w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img2} alt="Shoes" />
              </figure>
              <div className="card-body text-center ">
                <h2 className="card-title">
                  Pure Smile
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-sm text-gray-700">
                  This is a Dental Doctors personal website, where you can view
                  doctor services package and choose one package for you and
                  book that packages .
                </p>
                <div className="card-actions flex justify-center">
                  <a
                    href="https://smile-pure-dentist-care.web.app/"
                    target="_blank"
                    rel="noopener"
                    className="badge border hover:scale-110 border-secondary badge-outline"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/akashpk41/pure-smile-dentist"
                    target="_blank"
                    rel="noopener"
                    className="badge border hover:scale-110 border-secondary badge-outline"
                  >
                    Client Side Code
                  </a>
                </div>
              </div>
            </div>

            <div className="card max:md-w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={img3} alt="Shoes" />
              </figure>
              <div className="card-body text-center ">
                <h2 className="card-title">
                  Cur Hub
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-sm text-gray-700">
                  This is a Car warehouse website where all luxury cars are
                  available .
                </p>
                <div className="card-actions flex justify-center">
                  <a
                    href="https://car-hub-c85c4.web.app/"
                    target="_blank"
                    rel="noopener"
                    className="badge border hover:scale-110 border-secondary badge-outline"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/akashpk41/car-hub-client-side"
                    target="_blank"
                    rel="noopener"
                    className="badge border hover:scale-110 border-secondary badge-outline"
                  >
                    Client Side Code
                  </a>
                  <a
                    href="https://github.com/akashpk41/car-hub-server-side"
                    target="_blank"
                    rel="noopener"
                    className="badge border hover:scale-110 border-secondary badge-outline"
                  >
                    Server Side Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
