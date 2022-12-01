import { initialCountries, dataFields } from "../Data/IntialData";

const DataLogic = () => {
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
  console.log(dataStrutcture);

  return <></>;
};

export default DataLogic;
