import React from "react";
import { Chart } from "react-google-charts";

const GoogleCharts = ({ data }: any) => {
  return <Chart data={data} />;
};

export default GoogleCharts;
