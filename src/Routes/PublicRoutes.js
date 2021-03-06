import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Blogs from "../Pages/Components/Blogs";
import Contact from "../Pages/Components/Contact";
import MyPortfolio from "../Pages/Components/MyPortfolio";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  // { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/sign-in", name: "Login", Component: Login },
  { path: "/register", name: "Register", Component: Register },
  { path: "/my-portfolio", name: "Portfolio", Component: MyPortfolio },
  //     { path : '/', name : '', Component : '' },
];
