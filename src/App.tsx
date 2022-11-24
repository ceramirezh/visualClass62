import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Popultaion from "./Pages/Population";
import "./App.scss";
import GCharts from "./Pages/GCharts";
import TestPage1 from "./Pages/TestPage1";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<TestPage1 />} />
        <Route path="/population" element={<Popultaion />} />
      </Routes>
    </div>
  );
}

export default App;
