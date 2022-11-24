import React, { useState } from "react";
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

  // for (const value of iterator) console.log("this is value", value);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // const [countryData, setCountryData] = useState({

  // });

  // const arraycountries = [1, 2, 3, 4, 5, 6, 7];
  // let display = 1;
  // for (let i = 0; i < arraycountries.length; i++) {
  //   display = arraycountries[i];
  // }

  const netherlandsYear = initialCountries.map((country) =>
    country.netherlands?.map((year) => year.year)
  );
  // console.log(netherlands);

  const data = {
    datasets: [
      {
        label: "Red Dataset",
        data: initialCountries.map((country) => {
          if (country.netherlands)
            return {
              x: country.netherlands.map((y) => y.year),
              y: country.netherlands.map((p) => p.population),
              r: country.netherlands.map((s) => s.share_global_co2 * 10),
            };
          else {
            return {
              x: 1,
              y: 5,
              r: 10,
            };
          }
        }),
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
      <h2></h2>
      <Bubble options={options} data={data} />
    </>
  );
};

export default TestPage1;
