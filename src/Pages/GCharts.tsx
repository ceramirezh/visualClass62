import NL from "../Data/nederlands.json";
import CO from "../Data/colombia.json";
import PO from "../Data/poland.json";
import CH from "../Data/china.json";
import VI from "../Data/vietnam.json";
import US from "../Data/usa.json";
import JP from "../Data/japan.json";
import { useState } from "react";

const GCharts = () => {
  const initialCountries = [
    { netherlands: NL.Netherlands.data },
    { colombia: CO.Colombia.data },
    { poland: PO.Poland.data },
    { china: CH.China.data },
    { vietnam: VI.Vietnam.data },
    { usa: US["United States"].data },
    { japan: JP.Japan.data },
  ];

  const [countriesData, setCountriesData] = useState(initialCountries);
  const [countriesWithNumber, setCountriesWithNumnber] = useState([]);

  //   const coCo2 = coData.find((co2): any => {
  //     return co2.year === 2020 && co2.share_global_co2;
  //   });

  //   console.log(coCo2);

  const data = [
    ["Country", "Global Share Co2"],
    ["Colombia", 1],
    // ["Germany", 200],
    // ["United States", 300],
    // ["Brazil", 400],
    // ["Canada", 500],
    // ["France", 600],
    // ["RU", 700],
  ];

  const options = {
    sankey: {
      link: { color: { fill: "#d799ae" } },
      node: {
        colors: ["#a61d4c"],
        label: { color: "#871b47" },
      },
    },
  };

  return (
    <>
      {/* <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="700px"
        data={data}
      /> */}
    </>
  );
};

export default GCharts;
