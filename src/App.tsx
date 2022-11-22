import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Popultaion from "./Pages/Population";
import "./App.scss";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/population" element={<Popultaion />} />
      </Routes>
    </div>
  );
}

export default App;
