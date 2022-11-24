import styled from "styled-components";
import { useState } from "react";
import LineChart from "../Components/LineChart";
import NL from "../Data/nederlands.json";
import { initialCountries } from "../Data/IntialData";

const Popultaion = () => {
  // Uses for defining the "y" con chart
  const nlData = NL.Netherlands.data;

  // All the countries
  const [countryData, setCountryData] = useState({
    labels: nlData.map((data) => data.year),
    datasets: initialCountries.map((c) => {
      return {
        label: c.name,
        data: c.data.map((p) => p.population),
        borderColor: c.borderColor,
        backgroundColor: c.backgroundColor,
        borderWidth: 0.2,
      };
    }),
  });

  return (
    <div>
      <Title>This is Population</Title>
      <div style={{ width: 1000 }}>
        <LineChart chartData={countryData} />
      </div>
    </div>
  );
};

export default Popultaion;

const Title = styled.h3`
  display: flex;
  justify-content: center;
`;
