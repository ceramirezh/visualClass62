import React, { useState } from "react";
import SmilyFace from "../Components/Smily/SmilyFace";
import { initialCountries, dataFields } from "../Data/IntialData";

import { range } from "d3";

const FunData = () => {
  function refreshPage() {
    window.location.reload();
  }

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

  const dataStrutcture = worlMapdata(2020, "co2");

  const widthFace = 180;
  const heigthFace = 180;
  const array = range(5);

  return (
    <>
      <div>
        <button onClick={refreshPage}>Click to reload!</button>
      </div>
      <div>
        <SmilyFace width={widthFace} height={heigthFace} array={array} />
      </div>
    </>
  );
};

export default FunData;
