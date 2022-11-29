const SvgBubble = ({ dataStrutcture }: any) => {
  return (
    <>
      <div>
        <svg width={""} viewBox={"0 0 1000 200"}>
          <rect
            className="svg-chart"
            fill={"#eee"}
            x={0}
            y={0}
            width={1000}
            height={200}
          />
          {dataStrutcture.slice(1).map((dp: any, index: any) => {
            return (
              <g transform={`translate(${140 * index + 75} 100)`}>
                <circle
                  r={dp[1] && typeof dp[1] === "number" ? dp[1] * 3 : 0}
                  fill={"#ff0000"}
                />
                <text transform={"translate(0 -60)"} className="text">
                  <tspan textAnchor="middle">{dp[0]}</tspan>
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </>
  );
};

export default SvgBubble;
