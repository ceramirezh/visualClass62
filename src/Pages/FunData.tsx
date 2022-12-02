import SmilyFace from "../Components/Smily/SmilyFace";
// import { initialCountries } from "../Data/IntialData";
import "./Css/styles.css";

import { range } from "d3";

const FunData = () => {
  function refreshPage() {
    window.location.reload();
  }

  // const worlMapdata = (year: number, field: string) => [
  //   ["Country", field],
  //   ...initialCountries.map((c) => {
  //     const countryYearData = c.data.find((yearData) =>
  //       yearData.year ? yearData.year === year : false
  //     );
  //     const dataValue =
  //       countryYearData && countryYearData[field]
  //         ? countryYearData[field]
  //         : NaN;
  //     return [c.name, dataValue];
  //   }),
  // ];

  // const dataStrutcture = worlMapdata(2020, "co2");

  const widthFace = 166;
  const heigthFace = 166;
  const array = range(1);

  return (
    <>
      <h1>Soon...</h1>
      <div>{/* <button onClick={refreshPage}>Click to reload!</button> */}</div>
      <div className="container">
        <div>
          {/* <SmilyFace width={widthFace} height={heigthFace} array={array} /> */}
          <SmilyFace width={widthFace} height={heigthFace} array={array} />
        </div>
        {/* <div className="right">
          
        </div>
        <div className="right">
          <SmilyFace width={widthFace} height={heigthFace} array={array} />
        </div> */}
      </div>
    </>
  );
};

export default FunData;
