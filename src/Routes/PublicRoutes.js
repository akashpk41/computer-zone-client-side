import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Blogs from "../Pages/Components/Blogs";
import Contact from "../Pages/Components/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/sign-in", name: "Login", Component: Login },
  { path: "/register", name: "Register", Component: Register },
  //     { path : '/', name : '', Component : '' },
];
