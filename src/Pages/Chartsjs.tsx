import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { initialCountries } from "../Data/IntialData";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const TestPage1 = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: initialCountries.map((c) => {
      return {
        label: c.name,
        data: c.data.map((d) => {
          return {
            x: d.year,
            y: d.population,
            r: d.share_global_co2,
          };
        }),
        backgroundColor: c.backgroundColor,
      };
    }),
  };

  return (
    <>
      <h1>Hello</h1>
      <Bubble options={options} data={data} />
    </>
  );
};

export default TestPage1;
