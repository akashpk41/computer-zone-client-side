import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 border-t border-primary bg-base-200 text-base-content">
      <div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <img
          src="https://cdn.imgbin.com/4/9/13/computer-icon-monitor-icon-laptop-icon-ktYCUZSS.jpg"
          className="w-16"
          alt=""
        />
        <p>
          Computer Zone.
          <br />
          Providing reliable tech since 2022
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <NavLink to="/blogs" className="link link-hover">
          Blogs
        </NavLink>
        <NavLink to="/contact" className="link link-hover">
          Contact
        </NavLink>
        <NavLink to="/sign-in" className="link link-hover">
          Login
        </NavLink>
        <NavLink to="/register" className="link link-hover">
          Register
        </NavLink>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <NavLink to="/home" className="link link-hover">
          Home
        </NavLink>
        <NavLink to="/about" className="link link-hover">
          About us
        </NavLink>

        <NavLink to="/jobs" className="link link-hover">
          Jobs
        </NavLink>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <NavLink to="/terms-of-use" className="link link-hover">
          Terms of use
        </NavLink>
        <NavLink to="/privacy-policy" className="link link-hover">
          Privacy policy
        </NavLink>
        <NavLink to="/cookie-policy" className="link link-hover">
          Cookie policy
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
