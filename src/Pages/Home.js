import { useState, useEffect } from "react";
import { csv } from "d3";
import { useNavigate } from "react-router-dom";
import "./Css/homestyle.css";
const csvUrl =
  "https://gist.githubusercontent.com/ceramirezh/4cd3cc142655cdccc3b03521ad250b62/raw/cssColors.csv";

const width = 1950;
const height = 1000;

const Home = () => {
  const [data, setData] = useState(null);
  const initialMousePosition = { x: width / 2, y: height / 2 };
  const [mousePosition, setMousePostion] = useState(initialMousePosition);
  const navigate = useNavigate();
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  const mouseHandler = (e) => {
    const { clientX, clientY } = e;
    setMousePostion({ x: clientX, y: clientY });
  };

  if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const rbgCodes = data.map((c) => c["RGB hex value"]);
  const randomColor = rbgCodes[Math.floor(Math.random() * rbgCodes.length)];
  const randomColor2 = rbgCodes[Math.floor(Math.random() * rbgCodes.length)];
  const randomColor3 = rbgCodes[Math.floor(Math.random() * rbgCodes.length)];

  return (
    <>
      <h1 onMouseMove={mouseHandler}>
        Welcome To <span style={{ color: `${randomColor}` }}>Visualizing</span>{" "}
        <span style={{ color: `${randomColor2}` }}>Class</span>{" "}
        <span style={{ color: `${randomColor3}` }}>62</span>
      </h1>
      <div>
        <div className="boxes-home">
          <p style={{ textAlign: "center" }}>
            The multiculturalism of Class 62 inspired this page. Even though we
            spent ten weeks writing code together, we know very little about the
            countries we come from. We are all from different places, and we all
            have different stories. Data can tell us a part of it.
          </p>
        </div>
        <div className="boxes-home">
          <p style={{ textAlign: "center" }}>
            I did the graphical illustration of the data using three JavaScript
            libraries: Chart.js, D3.js, and Google Charts (I do not recommend
            it). Besides this, I used SVG to add interactivity to the charts
            (and to play around a bit).
          </p>
        </div>
        <div className="boxes-home">
          <p></p>
          <button
            style={{ backgroundColor: `${randomColor3}` }}
            className="button button1"
            onClick={() => {
              navigate("/co2");
            }}
          >
            Class 62 Co2
          </button>
          <button
            style={{ backgroundColor: `${randomColor}` }}
            className="button button2"
            onClick={() => {
              navigate("/dynamic_data");
            }}
          >
            Dynamic Data
          </button>
          <button
            style={{ backgroundColor: `${randomColor2}` }}
            className="button button3"
            onClick={() => {
              navigate("/mouse");
            }}
          >
            Follow the Mouse
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
