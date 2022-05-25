import Blogs from "../Pages/Components/Blogs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PurchasePart from "../Pages/Home/Parts/PurchasePart";

export const privateRoutes = [
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/purchase/:id", name: "Purchase Product", Component: PurchasePart },
];
