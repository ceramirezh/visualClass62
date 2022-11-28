import React, { useEffect, useState } from "react";
import axios from "axios";
import * as d3 from "d3";
import { csv, arc, pie } from "d3";

const width = 2858;
const height = 2000;
const centerX = width / 2;
const centerY = height / 2;
const circleRadious = 30;
const initialMousePosition = { x: width / 2, y: height / 2 };
const csvUrl =
  "https://gist.githubusercontent.com/ceramirezh/4cd3cc142655cdccc3b03521ad250b62/raw/cssColors.csv";

const pieArc = arc().innerRadius(0).outerRadius(width);

const WelcomePage = () => {
  const [mousePosition, setMousePostion] = useState(initialMousePosition);
  const [data, setData] = useState(null);

  const mouseHandler = (e) => {
    const { clientX, clientY } = e;
    setMousePostion({ x: clientX, y: clientY });
  };

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <div>"Loading..."</div>;
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {pie()
          .value(1)(data)
          .map((d) => (
            <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
          ))}
        {/* {data.map((d, i) => (
          <path
            fill={d["RGB hex value"]}
            d={pieArc({
              startAngle: (i / data.length) * 2 * Math.PI,
              endAngle: ((i + 1) / data.length) * 2 * Math.PI,
            })} 
          
          > */}
        {/* <svg width={width} height={height} onMouseMove={mouseHandler}>
          <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadious} /> */}
        {/* </svg> */}

        {/* ))} */}
      </g>
    </svg>
  );
};

export default WelcomePage;
