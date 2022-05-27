import React, { useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { SpinnerRoundOutlined } from "spinners-react";
import axiosPrivate from "../../API/axiosPrivate";

import auth from "../../firebase.init";
import AddUserInfo from "./AddUserInfo";
import UpdateProfileModal from "./Modal/UpdateProfileModal";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [modal, setModal] = useState(null);
  const { email } = user;

  const { data, isLoading } = useQuery("userProfileData", () =>
    axiosPrivate.get(`/user/profile/${email}`)
  );
  // console.log(data?.data);
  const userData = data?.data;
  // console.log(userData);

  if (isLoading) {
    return (
      <SpinnerRoundOutlined
        size={100}
        color="red"
        className="w-48 h-48 text-primary text-center mx-auto"
      />
    );
  }

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
            alt={user.displayName}
            className="rounded-full w-32  "
          />
        </figure>
        <div className="card-body space-y-2 items-center text-center">
          <h2 className="text-2xl font-bold"> Name : {user.displayName} </h2>

          <h3 className="text-base font-semibold"> Email : {user.email} </h3>

          {userData && (
            <div>
              <h3 className="text-base  font-semibold">
                Country :
                <span className="font-normal text-gray-800 ">
                  {" "}
                  {userData.country}{" "}
                </span>
              </h3>

              <h3 className=" text-base  font-semibold">
                Education :
                <span className="font-normal text-gray-800 ">
                  {" "}
                  {userData.education}
                </span>
              </h3>

              <h3 className="text-base  font-semibold">
                Linkdin Profile :
                <span className="font-normal text-blue-500 ">
                  {" "}
                  linkedin.com/in/{userData.linkedIn}
                </span>
              </h3>

              <h3 className="text-base  font-semibold">
                Phone :
                <span className="font-normal text-gray-800 ">
                  {" "}
                  +{userData.phone}{" "}
                </span>
              </h3>
            </div>
          )}
          {!userData && <AddUserInfo />}

          {userData && (
            <div className="card-actions">
              <label
                onClick={() => setModal(true)}
                for="update-profile-modal"
                className="btn btn-primary"
              >
                Update Profile
              </label>
            </div>
          )}
        </div>
      </div>
      {modal && <UpdateProfileModal userData={userData} setModal={setModal} />}
    </div>
  );
};

export default MyProfile;
