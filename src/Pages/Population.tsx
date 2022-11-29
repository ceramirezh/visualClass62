import BubbleChart from "../Components/BubbleChart";
import { initialCountries } from "../Data/IntialData";
import "./Css/styles.css";

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
    <div>
      <h1>
        Historically, the US is responsible for the largest share in global Co2
        per capita
      </h1>
      <div className="content">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse
            unde, velit quam, vero eligendi doloribus nisi illo corrupti nulla
            deleniti cum ratione vitae quo. In vitae eligendi repellat dicta.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem esse
            unde, velit quam, vero eligendi doloribus nisi illo corrupti nulla
            deleniti cum ratione vitae quo. In vitae eligendi repellat dicta.
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
