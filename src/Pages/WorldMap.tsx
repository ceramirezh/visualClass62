import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { initialCountries, dataFields } from "../Data/IntialData";
import "./Css/styles.css";

const WorldMapChart = () => {
  const [years, setYear] = useState(1921);
  const [fields, setFields] = useState("");

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

  const dataStrutcture = worlMapdata(years, fields);

  const eventHandler = (e: any) => {
    setYear(parseInt(e.target.value));
  };

  const onOptionChangeHandler = (event: any) => {
    setFields(event.target.value);
  };

  return (
    <>
      <div className="content">
        <div>
          <div>
            Choose a Category
            <select onChange={onOptionChangeHandler}>
              <option>Please choose one option</option>

              {dataFields.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
          </div>
          <div>
            <p>Slide Years</p>
            <p>{years}</p>
            <input
              type="range"
              min="1921"
              max="2020"
              value={years}
              id="myRange"
              onChange={eventHandler}
            />
          </div>
        </div>
        <div className="worldmap">
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
        </div>
      </div>
      <div className="svg-chart">
        <svg width={""} viewBox={"0 0 1000 300"}>
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
      </div>
    </>
  );
};
export default WorldMapChart;
