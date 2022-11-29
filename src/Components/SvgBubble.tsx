const SvgBubble = ({ dataStrutcture }: any) => {
  return (
    <>
      <div className="svg-chart">
        <svg width={""} viewBox={"0 0 1000 200"}>
          <rect fill={"#eee"} x={0} y={0} width={1000} height={300} />
          {dataStrutcture.slice(1).map((dp: any, index: any) => {
            return (
              <g transform={`translate(${100 * index + 50} 150)`}>
                <circle
                  r={dp[1] && typeof dp[1] === "number" ? dp[1] * 3 : 0}
                  fill={"#ff0000"}
                />
                <text className="text">{dp[0]}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </>
  );
};

export default SvgBubble;
