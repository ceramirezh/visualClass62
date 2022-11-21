import React, { Component } from "react";
import CanvasJSReact from "../Canvas/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const dummyData = [
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

class TestPage1 extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Our Countries grew quite differently",
      },
      axisX: {
        valueFormatString: "YYYY",
      },
      axisY: {
        title: "Population",
        prefix: "",
      },
      data: [
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: dummyData.map((entry) => ({
            x: entry.year,
            y: entry.population,
          })),
          // [
          //   { x: new Date(2017, 0), y: 25060 },
          //   { x: new Date(2017, 1), y: 27980 },
          //   { x: new Date(2017, 2), y: 42800 },
          //   { x: new Date(2017, 3), y: 32400 },
          //   { x: new Date(2017, 4), y: 35260 },
          //   { x: new Date(2017, 5), y: 33900 },
          //   { x: new Date(2017, 6), y: 40000 },
          //   { x: new Date(2017, 7), y: 52500 },
          //   { x: new Date(2017, 8), y: 32300 },
          //   { x: new Date(2017, 9), y: 42000 },
          //   { x: new Date(2017, 10), y: 37160 },
          //   { x: new Date(2017, 11), y: 38400 },
          // ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default TestPage1;
