import {
  CogIcon,
  CurrencyEuroIcon,
  HandIcon,
  PlusIcon,
  ShoppingCartIcon,
  StarIcon,
  UserAddIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="open-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col mt-5   ">
        {/* <!-- Page content here --> */}

        <h1 className="text-center mb-3 font-semibold text-secondary text-2xl ">
          {" "}
          Welcome To Your Dashboard{" "}
        </h1>
        <Outlet />
      </div>
      <div class="drawer-side border-r border-secondary ">
        <label for="open-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/my-orders">
              {" "}
              <ShoppingCartIcon className="h-5 w-5 ml-1 text-gray-900" /> My
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-a-review">
              {" "}
              <StarIcon className="h-5 w-5 ml-1 text-gray-900" /> Add a Review
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/my-profile">
              {" "}
              <UserCircleIcon className="h-5 w-5 ml-1 text-gray-900" /> My
              Profile
            </NavLink>
          </li>

          {/* only for admin */}

          <li>
            <NavLink to="/dashboard/add-a-product">
              {" "}
              <PlusIcon className="h-5 w-5 ml-1 text-gray-900" /> Add a Product
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/manage-product">
              {" "}
              <HandIcon className="h-5 w-5 ml-1 text-gray-900" /> Manage Product
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/manage-all-orders">
              {" "}
              <CurrencyEuroIcon className="h-5 w-5 ml-1 text-gray-900" /> Manage
              All Orders
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/make-admin">
              {" "}
              <UserAddIcon className="h-5 w-5 ml-1 text-gray-900" /> Make Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
