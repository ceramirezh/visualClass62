import React, { useState } from "react";
import DropDownMenu from "./DropdownMenu";
import { initialCountries, dataFields } from "../Data/IntialData";
import WorldMap from "./WorldMap";
import SvgBubble from "./SvgBubble";

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
        <DropDownMenu
          dataFields={dataFields}
          onOptionChangeHandler={onOptionChangeHandler}
          years={years}
          eventHandler={eventHandler}
        />
        <WorldMap dataStrutcture={dataStrutcture} />
      </div>
      <SvgBubble dataStrutcture={dataStrutcture} />
    </>
  );
};
export default WorldMapChart;
