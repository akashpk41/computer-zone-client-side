import AddAReview from "../Pages/Dashboard/AddAReview";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProfile from "../Pages/Dashboard/MyProfile";

export const dashboardRoutes = [
  { path: "my-orders", name: "My Orders", Component: MyOrders },
  { path: "add-a-review", name: "Add A Review", Component: AddAReview },
  { path: "my-profile", name: "My Profile", Component: MyProfile },
  //   { path: "", name: "", Component:  },
  //   { path: "", name: "", Component:  },
];
