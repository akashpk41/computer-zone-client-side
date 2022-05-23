import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Pages/Shared/Navbar";
import { publicRoute } from "./Routes/PublicRoutes";
import { useEffect } from "react";
import PageNotFound from "./Pages/Components/PageNotFound";
import Footer from "./Pages/Shared/Footer";

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






        {/* page not found */}
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
