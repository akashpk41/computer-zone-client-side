import React, { useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import AddUserInfo from "./AddUserInfo";
import UpdateProfileModal from "./Modal/UpdateProfileModal";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [modal, setModal] = useState(null);

  return (
    <div className=" mx-2 md:mx-10  ">
      <h1 className="text-center mb-3 font-semibold text-primary text-xl ">
        {" "}
        My Profile{" "}
      </h1>

      <div className="card md:w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={
              user?.photoURL ||
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
            alt="Shoes"
            className="rounded-full w-32  "
          />
        </figure>
        <div className="card-body space-y-2 items-center text-center">
          <h2 className="text-2xl font-bold"> Name : {user.displayName} </h2>

          <h3 className="text-base font-semibold"> Email : {user.email} </h3>

          <h3 className="text-base  font-semibold">
            Country :
            <span className="font-normal text-gray-800 "> Abu Dhabi, UAE </span>
          </h3>

          <h3 className=" text-base  font-semibold">
            Education :
            <span className="font-normal text-gray-800 "> Collage Name</span>
          </h3>

          <h3 className="text-base  font-semibold">
            Linkdin Profile :
            <span className="font-normal text-gray-800 "> Profile Link</span>
          </h3>

          <h3 className="text-base  font-semibold">
            Phone :
            <span className="font-normal text-gray-800 "> +123456787</span>
          </h3>
          <AddUserInfo />

          <div className="card-actions">
            <label
              onClick={() => setModal(true)}
              for="update-profile-modal"
              className="btn btn-primary"
            >
              Update Profile
            </label>
          </div>
        </div>
      </div>
      {modal && <UpdateProfileModal setModal={setModal} />}
    </div>
  );
};

export default MyProfile;
