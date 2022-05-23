import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import { publicRoute } from "./Routes/PublicRoutes";

function App() {
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
