import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = ({ options, data }: any) => {
  return <Bubble options={options} data={data} />;
};

export default BubbleChart;
