import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Popultaion from "./Pages/Population";
import "./App.css";
import ChartsJs from "./Pages/Chartsjs";
import TestPage2 from "./Pages/TestPage2";
import ForMyUnderstanding from "./TryCss.txs/ForMyUnderstanding";
import WelcomePage from "./Pages/WelcomePage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<ForMyUnderstanding />} />
        <Route path="/test" element={<TestPage2 />} />
        <Route path="/population" element={<Popultaion />} />
        <Route path="/chartsjs" element={<ChartsJs />} />
      </Routes>
    </div>
  );
}

export default App;
