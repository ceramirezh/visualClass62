import BubbleChart from "../Components/BubbleChart";
import { initialCountries } from "../Data/IntialData";

const ChartJs = () => {
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
      <BubbleChart options={options} data={data} />
    </>
  );
};

export default ChartJs;
