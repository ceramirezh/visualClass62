import styled from "styled-components";

const FaceContainer = ({ children, centerX, centerY, width, height }: any) => {
  return (
    <>
      <Box>
        <svg width={""} viewBox={"0 0 1000 1000"}>
          <rect
            className="svg-chart"
            fill={"#eee"}
            x={0}
            y={0}
            width={200}
            height={200}
          />
          <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
        </svg>
      </Box>
    </>
  );
};

export default FaceContainer;

const Box = styled.div`
  margin-left: 100px;
`;
