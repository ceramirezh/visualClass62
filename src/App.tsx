import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div>
      <h1>Start Project</h1>
      <NavBar>
        <Routes>
          <Route />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
