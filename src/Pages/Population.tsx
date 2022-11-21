import styled from "styled-components";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import TestPage1 from "./TestPage1";
import LineChart from "../Components/LineChart";
import NL from "../Data/nederlands.json";

const Popultaion = () => {
  const nlData = NL.Netherlands.data;
  const dataPoints = [
    {
      year: 2010,
      population: 16682928,
    },
    {
      year: 2011,
      population: 16738191,
    },
    {
      year: 2012,
      population: 16791850,
    },
    {
      year: 2013,
      population: 16843512,
    },
    {
      year: 2014,
      population: 16892518,
    },
    {
      year: 2015,
      population: 16938492,
    },
    {
      year: 2016,
      population: 16981286,
    },
    {
      year: 2017,
      population: 17021344,
    },
    {
      year: 2018,
      population: 17059560,
    },
    {
      year: 2019,
      population: 17097124,
    },
    {
      year: 2020,
      population: 17134874,
    },
  ];
  const [userData, setUserData] = useState({
    labels: nlData.map((data) => data.year),
    datasets: [
      {
        label: "population growth",
        data: nlData.map((data) => data.population),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <Title>This is Population</Title>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
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
