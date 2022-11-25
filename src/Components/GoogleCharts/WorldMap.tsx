import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { initialCountries } from "../../Data/IntialData";

const WorldMapChart = () => {
  const [year, setYear] = useState(1921);
  const worlMapdata = (year: number, field: string) => [
    ["Country", field],
    ...initialCountries.map((c) => {
      const countryYearData = c.data.find((yearData) =>
        yearData.year ? yearData.year === year : false
      );
      const dataValue =
        countryYearData && countryYearData[field]
          ? countryYearData[field]
          : NaN;
      return [c.name, dataValue];
    }),
  ];

  const dataStrutcture = worlMapdata(year, "co2_per_capita");

  const eventHandler = (e: any) => {
    setYear(parseInt(e.target.value));
  };

  return (
    <>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = dataStrutcture[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={dataStrutcture}
      />
      <svg width={"100vw"} viewBox={"0 0 1000 300"}>
        <rect fill={"#eee"} x={0} y={0} width={1000} height={300} />
        {dataStrutcture.slice(1).map((dp, index) => {
          return (
            <g transform={`translate(${100 * index + 50} 150)`}>
              <circle
                r={dp[1] && typeof dp[1] === "number" ? dp[1] * 3 : 50}
                fill={"#ff0000"}
              />
              <text>{dp[0]}</text>
            </g>
          );
        })}
      </svg>

      <label>
        Choose a Year
        <select value={year}>
          <option value={year}>{year}</option>
        </select>
      </label>
      <div>
        <p>Slide Years</p>
        <input
          type="range"
          min="1921"
          max="2020"
          value={year}
          id="myRange"
          onChange={eventHandler}
        />
      </div>
    </>
  );
};
export default WorldMapChart;
