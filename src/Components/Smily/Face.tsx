const Circle = ({ radious, strokewidth }: any) => {
  return (
    <>
      <circle
        cx={0}
        cy={0}
        r={radious}
        fill="yellow"
        stroke="black"
        strokeWidth={strokewidth}
      />
    </>
  );
};

export default Circle;
