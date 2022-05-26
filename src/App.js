import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Pages/Shared/Navbar";
import { useEffect } from "react";
import PageNotFound from "./Pages/Components/PageNotFound";
import Footer from "./Pages/Shared/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blogs from "./Pages/Components/Blogs";
import PrivateRoute from "./Authentication/PrivateRoute";

import MyOrders from "./Pages/Dashboard/MyOrders";
import AddAReview from "./Pages/Dashboard/AddAReview";
// import PurchasePart from "../../";

import "react-toastify/dist/ReactToastify.css";
import PurchasePart from "./Pages/Home/Parts/PurchasePart";
import Home from "./Pages/Home/Home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import MyPortfolio from "./Pages/Components/MyPortfolio";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        {/* public routes */}

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-portfolio" element={<MyPortfolio />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* protected route */}
        <Route
          path="/purchase/:id"
          element={
            <PrivateRoute>
              <PurchasePart />
            </PrivateRoute>
          }
        />

        {/* dashboard nested routes */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {" "}
              <Dashboard />{" "}
            </PrivateRoute>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="add-a-review" element={<AddAReview />} />
          <Route path="my-profile" element={<MyProfile />} />
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
