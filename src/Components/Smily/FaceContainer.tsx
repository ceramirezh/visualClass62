const FaceContainer = ({ children, centerX, centerY, width, height }: any) => {
  return (
    <>
      <svg width="170px" height="200px" border-color="black">
        <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
      </svg>
    </>
  );
};

export default FaceContainer;
