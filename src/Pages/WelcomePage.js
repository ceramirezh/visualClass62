import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { csv, arc, pie } from "d3";
import "./Css/styles.css";

const width = 1950;
const height = 1000;
const centerX = width / 2;
const centerY = height / 2;
const csvUrl =
  "https://gist.githubusercontent.com/ceramirezh/4cd3cc142655cdccc3b03521ad250b62/raw/cssColors.csv";

const pieArc = arc().innerRadius(0).outerRadius(width);

const WelcomePage = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  const randomNumber = Math.random();

  if (!data) {
    return <div>"Loading..."</div>;
  }

  return (
    <>
      {/* <svg width={width} height={height} onMouseMove={mouseHandler}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadious} />
      </svg> */}
      <div key={randomNumber} style={{ width: "100vw", height: "100vh" }}>
        <svg width={"100%"} height={"100%"} viewBox={`0 0 ${width} ${height}`}>
          <g transform={`translate(${centerX}, ${centerY})`}>
            {pie()
              .value(1)(data)
              .map((d) => (
                <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
              ))}
            <text x={-700} y={0} fill="red" fontSize={"80"}>
              Welcome To Visualizing Class 62
            </text>
          </g>
          <g>
            <rect
              x="46%"
              y="51%"
              width="150"
              height="50"
              rx="15"
              stroke="black"
              stroke-width="3"
              opacity="0.3"
              fill="black"
              onClick={() => {
                navigate("/co2");
              }}
            />
            <text x="925" y="548" font-size="35" fill="White">
              Enter
            </text>
            <rect
              x="46%"
              y="51%"
              width="150"
              height="50"
              rx="15"
              stroke="black"
              stroke-width="3"
              opacity="0.0"
              fill="black"
              onClick={() => {
                navigate("/co2");
              }}
            />
          </g>
        </svg>
        {/* <button>Button</button> */}
      </div>
    </>
  );
};

export default WelcomePage;
