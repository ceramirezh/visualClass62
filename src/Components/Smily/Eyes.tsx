const Eyes = ({ eyeOffSetX, eyeOffSetY, eyeRadious }: any) => {
  return (
    <>
      <circle cx={eyeOffSetX} cy={eyeOffSetY} r={eyeRadious}></circle>
    </>
  );
};

export default Eyes;
