import styled from "styled-components";

const FaceContainer = ({ children, centerX, centerY, width, height }: any) => {
  return (
    <>
      <Box>
        <svg width="170px" height="200px" border-color="black">
          <rect
            className="svg-chart"
            fill={"white"}
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
