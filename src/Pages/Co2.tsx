import styled from "styled-components";
import { useState } from "react";
import LineChart from "../Components/LineChart";
import NL from "../Data/nederlands.json";
import { initialCountries } from "../Data/IntialData";
import "./Css/styles.css";

const Popultaion = () => {
  // Uses for defining the "y" con chart
  const nlData = NL.Netherlands.data;

  // All the countries
  const [globlaCo2, setGlobalCo2] = useState({
    labels: nlData.map((data) => data.year),
    datasets: initialCountries.map((c) => {
      return {
        label: c.name,
        data: c.data.map((p) => p.share_global_co2),
        borderColor: c.borderColor,
        backgroundColor: c.backgroundColor,
        borderWidth: 0.2,
      };
    }),
  });

  return (
    <div>
      <Title>Global share of Co2</Title>
      <div className="content">
        <div className="bubble-chart">
          <LineChart chartData={globlaCo2} />
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse
            unde, velit quam, vero eligendi doloribus nisi illo corrupti nulla
            deleniti cum ratione vitae quo. In vitae eligendi repellat dicta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse
            unde, velit quam, vero eligendi doloribus nisi illo corrupti nulla
            deleniti cum ratione vitae quo. In vitae eligendi repellat dicta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popultaion;

const Title = styled.h3`
  display: flex;
  font-size: 60;
  justify-content: center;
`;
