import React from "react";
import { Chart } from "react-google-charts";
import { initialCountries } from "../../Data/IntialData";

const BubbleAnimated = () => {
  const dataBubble = [
    ["Country", "GdP"],
    [1, 1],
    [2, 3],
    [7, 5],
  ];

  const options = {
    title: "GDP 2020",
    hAxis: { title: "Country", minValue: 0 },
    vAxis: { title: "Gdp", minValue: 0 },
    legend: "none",
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
    enableInteractivity: false,
  };
  return (
    <Chart
      chartType="ScatterChart"
      width="90%"
      height="600px"
      data={dataBubble}
      options={options}
    />
  );
};

export default BubbleAnimated;
