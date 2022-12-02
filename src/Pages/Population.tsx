import BubbleChart from "../Components/BubbleChart";
import MouseFollower from "../Components/MouseFollower";
import { initialCountries } from "../Data/IntialData";

import "./Css/styles.css";

const ChartJs = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          text: "Population of Countries",
        },
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
    <div>
      <h1>
        Historically, the US is responsible for the largest share in global Co2
        per capita
      </h1>
      <div className="content">
        <div className="text">
          <p>
            It is not unusual to think that China and the United States are big
            contributors to Co2. But looking at their per capita contribution
            makes it more interesting. This graph shows the per capita Co2
            contribution over the last 100 years in relation to the growth of
            the country's population.
          </p>

          <p>
            The radius of the circle represents co2 per capita. The dataset
            values are in decimals. To make the circles visible, I multiplied
            the values by a factor of 10.
          </p>
        </div>
        <div className="bubble-chart">
          <BubbleChart options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ChartJs;
