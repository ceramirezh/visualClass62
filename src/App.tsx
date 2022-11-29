import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Popultaion from "./Pages/Co2";
import "./App.css";
import ChartsJs from "./Pages/Population";
import DynamicData from "./Pages/DynamicData";
import ForMyUnderstanding from "./TryCss.txs/ForMyUnderstanding";
import WelcomePage from "./Pages/WelcomePage";
import FunData from "./Pages/FunData";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<ForMyUnderstanding />} />
        <Route path="/co2" element={<Popultaion />} />
        <Route path="/dynamic_data" element={<DynamicData />} />
        <Route path="/62population" element={<ChartsJs />} />
        <Route path="/fun_data" element={<FunData />} />
      </Routes>
    </div>
  );
}

export default App;
