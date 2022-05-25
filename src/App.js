import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Pages/Shared/Navbar";
import { publicRoute } from "./Routes/PublicRoutes";
import { useEffect } from "react";
import PageNotFound from "./Pages/Components/PageNotFound";
import Footer from "./Pages/Shared/Footer";
import { privateRoutes } from "./Routes/PrivateRoutes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blogs from "./Pages/Components/Blogs";
import PrivateRoute from "./Authentication/PrivateRoute";
import { dashboardRoutes } from "./Routes/DashboardRoutes";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddAReview from "./Pages/Dashboard/AddAReview";


import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        {/* public routes */}

        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* private routes */}

        <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

        {/* dashboard nested routes */}

        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* <Route index element={<MyOrders />} /> */}

        {/* {dashboardRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route> */}

        {/* doctors portal  */}
        {/* <PrivateRoute>
              <Dashboard />
            </PrivateRoute> */}
        {/* */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {" "}
              <Dashboard />{" "}
            </PrivateRoute>
          }
        >
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-a-review" element={<AddAReview />} />
        </Route>

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
