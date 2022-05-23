import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Pages/Shared/Navbar";
import { publicRoute } from "./Routes/PublicRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        {/* public routes */}

        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* private routes */}
      </Routes>
    </div>
  );
}

export default App;
