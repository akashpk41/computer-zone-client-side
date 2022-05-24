import Blogs from "../Pages/Components/Blogs";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const privateRoutes = [
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/blogs", name: "Blogs", Component: Blogs },
];

