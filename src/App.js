import { Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-primary text-4xl font-bold ">computer</h1>
      <Routes></Routes>
    </div>
  );
}

export default App;
