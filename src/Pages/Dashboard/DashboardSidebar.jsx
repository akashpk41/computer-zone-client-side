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
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const DashboardSidebar = ({ children }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin);

  return (
    <div className="drawer drawer-mobile">
      <input id="open-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mt-5   ">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl text-center text-secondary font-semibold mb-3 font-sans">
          {" "}
          Welcome To Your Dashboard{" "}
        </h1>
        {children}
      </div>
      <div className="drawer-side border-r border-secondary ">
        <label for="open-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {admin || (
            <>
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
                  <StarIcon className="h-5 w-5 ml-1 text-gray-900" /> Add a
                  Review
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/dashboard/my-profile">
              {" "}
              <UserCircleIcon className="h-5 w-5 ml-1 text-gray-900" /> My
              Profile
            </NavLink>
          </li>

          {/* only for admin */}

          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/add-a-product">
                  {" "}
                  <PlusIcon className="h-5 w-5 ml-1 text-gray-900" /> Add a
                  Product
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manage-product">
                  {" "}
                  <HandIcon className="h-5 w-5 ml-1 text-gray-900" /> Manage
                  Product
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manage-all-orders">
                  {" "}
                  <CurrencyEuroIcon className="h-5 w-5 ml-1 text-gray-900" />{" "}
                  Manage All Orders
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/make-admin">
                  {" "}
                  <UserAddIcon className="h-5 w-5 ml-1 text-gray-900" /> Make
                  Admin
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
