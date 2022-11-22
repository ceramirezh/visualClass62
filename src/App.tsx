import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Popultaion from "./Pages/Population";

function App() {
  return (
    <div>
      <h1>Start Project</h1>
      {/* <NavBar> */}
      <Routes>
        <Route path="/population" element={<Popultaion />} />
      </Routes>
      {/* </NavBar> */}
    </div>
  );
}

export default App;
