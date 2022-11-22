import styled from "styled-components";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import TestPage1 from "./TestPage1";
import LineChart from "../Components/LineChart";
import NL from "../Data/nederlands.json";
import CO from "../Data/colombia.json";
import PO from "../Data/poland.json";
import CH from "../Data/china.json";
import VI from "../Data/vietnam.json";
import US from "../Data/usa.json";
import JP from "../Data/japan.json";

const Popultaion = () => {
  const nlData = NL.Netherlands.data;
  const coData = CO.Colombia.data;
  const poData = PO.Poland.data;
  const chData = CH.China.data;
  const viData = VI.Vietnam.data;
  const usData = US["United States"].data;
  const jpData = JP.Japan.data;

  const [userData, setUserData] = useState({
    labels: nlData.map((data) => data.year),
    datasets: [
      {
        label: "Japan",
        data: jpData.map((data) => data.population),
        borderColor: "orange",
        borderWidth: 0.2,
      },

      {
        label: "Vietnam",
        data: viData.map((data) => data.population),
        borderColor: "orange",
        borderWidth: 0.2,
      },
      {
        label: "Netherlands",
        data: nlData.map((data) => data.population),
        borderColor: "orange",
        borderWidth: 0.2,
      },
      {
        label: "Colombia",
        data: coData.map((data) => data.population),
        borderColor: "blue",
        borderWidth: 0.2,
      },
      {
        label: "Poland",
        data: poData.map((data) => data.population),
        borderColor: "red",
        borderWidth: 0.2,
      },
    ],
  });

  const [usChData, setUsCHData] = useState({
    labels: usData.map((data) => data.year),
    datasets: [
      {
        label: "USA",
        data: usData.map((data) => data.population),
        borderColor: "orange",
        borderWidth: 0.2,
      },
      {
        label: "China",
        data: chData.map((data) => data.population),
        borderColor: "orange",
        borderWidth: 0.2,
      },
    ],
  });

  return (
    <div>
      <Title>This is Population</Title>
      <div style={{ width: 1000 }}>
        <LineChart chartData={userData} />
        <LineChart chartData={usChData} />
      </div>
      {/* <TestPage1 /> */}
    </div>
  );
};

export default Popultaion;

const Title = styled.h3`
  display: flex;
  justify-content: center;
`;
