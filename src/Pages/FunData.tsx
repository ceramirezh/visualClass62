import React, { useState } from "react";
import SmilyFace from "../Components/Smily/SmilyFace";
import { initialCountries, dataFields } from "../Data/IntialData";

import { range } from "d3";

const FunData = () => {
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

  const width = 166;
  const heigth = 166;
  const array = range(2);

  return (
    <>
      <SmilyFace width={width} height={heigth} array={array} />
    </>
  );
};

export default FunData;
