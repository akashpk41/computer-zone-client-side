import { LoginIcon, LogoutIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLink = (
  <>
    <li>
      <NavLink to="/home" className="">
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </li>
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

const Navbar = () => {
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

            <li>
              <NavLink to="/dashboard" className="text-xl">
                Dashboard
              </NavLink>
            </li>
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
            <div className=" mt-3  ">
              <NavLink to="/sign-in" className="btn btn-primary   mr-2 ">
                Sign In
              </NavLink>
              <NavLink to="/register" className="btn btn-outline btn-primary ">
                Register
              </NavLink>
            </div>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-mono ">
          COMPUTER ZONE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLink}</ul>
      </div>
      <div className="navbar-end hidden  md:block ">
        <NavLink to="/sign-in" className="btn px-2 btn-primary  mx-1 ">
          Sign In <LoginIcon className="h-5 w-5 ml-1 text-gray-900" />
        </NavLink>
        <NavLink to="/register" className="btn px-2 btn-outline btn-primary ">
          Register <LogoutIcon className="h-5 w-5 ml-1 text-gray-900" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
