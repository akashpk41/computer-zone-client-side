import {
  ChartBarIcon,
  LoginIcon,
  LogoutIcon,
  TableIcon,
} from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";

import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);


  // console.log(location);

  const navLink = (
    <>
      <li>
        <NavLink to="/home" className="">
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/my-portfolio">Portfolio</NavLink>
      </li>

    </>
  );

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100  border-b border-primary">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box    shadow-2xl w-60"
          >
            <li>
              <NavLink to="/" className="text-xl">
                Home
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink to="/dashboard" className="text-xl">
                  Dashboard
                </NavLink>
              </li>
            )}

            <li>
              <NavLink to="/blogs" className="text-xl">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-xl">
                Contact Us
              </NavLink>
            </li>
            <li>
        <NavLink to="/my-portfolio" className="text-xl">Portfolio</NavLink>
      </li>
            {user ? (
              <>
                {" "}
                <button
                  onClick={handleSignOut}
                  className="btn  btn-primary    mt-3 "
                >
                  Sign Out
                </button>{" "}
                <p className="text-base mt-3 text-center font-semibold ">
                  {" "}
                  {user.displayName}{" "}
                </p>
              </>
            ) : (
              <div className=" mt-3  ">
                <NavLink to="/sign-in" className="btn btn-primary   mr-2 ">
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-outline btn-primary "
                >
                  Register
                </NavLink>
              </div>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-mono ">
          COMPUTER ZONE
        </Link>
      </div>

      <div className="navbar-end  ">
        <label
          for="open-sidebar"
          className="btn btn-outline btn-primary drawer-button lg:hidden"
        >
          <TableIcon className="h-5 w-5 ml-1 text-gray-900" />
        </label>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLink}</ul>
      </div>

      {user ? (
        <>
          {" "}
          <button
            onClick={handleSignOut}
            className="btn btn-primary ml-3 hidden md:block   mr-2 "
          >
            Sign Out
          </button>
          <p className="text-sm ml-3 font-semibold hidden md:block ">
            {" "}
            {user.displayName}{" "}
          </p>
        </>
      ) : (
        <div className="navbar-end hidden  md:block ">
          <NavLink to="/sign-in" className="btn px-2 btn-primary  mx-1 ">
            Sign In <LoginIcon className="h-5 w-5 ml-1 text-gray-900" />
          </NavLink>
          <NavLink to="/register" className="btn px-2 btn-outline btn-primary ">
            Register <LogoutIcon className="h-5 w-5 ml-1 text-gray-900" />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
