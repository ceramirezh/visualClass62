import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { initialCountries } from "../Data/IntialData";
import NL from "../Data/nederlands.json";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const TestPage1 = () => {
  // console.log(initialCountries);
  const nlData = NL.Netherlands.data;
  const year = nlData.map((y) => y.year);
  const iterator = year.values();

  for (const value of iterator) console.log("this is value", value);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // const years = initialCountries.map((country) => country.colombia);
  // console.log(years);

  const data = {
    datasets: [
      {
        label: "Red Dataset",
        data: initialCountries.map((country) =>
          country.netherlands
            ? {
                x: 1,
                y: 9,
                r: 10,
              }
            : {
                x: 10,
                y: 10,
                r: 10,
              }
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },

      // {
      //   label: "Blue dataset",
      //   data: Array.from({ length: 50 }, () => ({
      //     x: faker.datatype.number({ min: -100, max: 100 }),
      //     y: faker.datatype.number({ min: -100, max: 100 }),
      //     r: faker.datatype.number({ min: 5, max: 20 }),
      //   })),
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  return (
    <>
      <h1>Hello</h1>
      <Bubble options={options} data={data} />
    </>
  );
};

export default TestPage1;
