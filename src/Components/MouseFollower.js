import { csv } from "d3";
import { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/ceramirezh/4cd3cc142655cdccc3b03521ad250b62/raw/cssColors.csv";

// interface InitialMouse {
//   x: number;
//   y: number;
// }

const MouseFollower = () => {
  const width = 1950;
  const height = 1000;
  const circleRadious = 30;
  const initialMousePosition = { x: width / 2, y: height / 2 };
  const [mousePosition, setMousePostion] = useState(initialMousePosition);
  const [data, setData] = useState("");

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  const mouseHandler = (e) => {
    const { clientX, clientY } = e;
    setMousePostion({ x: clientX, y: clientY });
  };

  console.log(data);

  if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  const rbgCodes = data.map((c) => c["RGB hex value"]);
  const randomNumber = Math.floor(Math.random());
  const randomElement = rbgCodes[Math.floor(Math.random() * rbgCodes.length)];

  return (
    <div key={randomNumber}>
      <svg
        fill={randomElement}
        width={width}
        height={height}
        onMouseMove={mouseHandler}
      >
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadious} />
      </svg>
    </div>
  );
};

export default MouseFollower;
