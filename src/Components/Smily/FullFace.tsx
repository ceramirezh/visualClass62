import Mouth from "./Mouth";
import Face from "./Face";
import Eyes from "./Eyes";
import FaceContainer from "./FaceContainer";

export const FullFace = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffSetX,
  eyeOffSetY,
  eyeRadious,
  mouthWidth,
  mouthRadious,
}: any) => {
  return (
    <div>
      <FaceContainer
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
      >
        <Face radious={centerY - strokeWidth / 2} strokewidth={strokeWidth} />
        <Eyes
          eyeOffSetX={-eyeOffSetX}
          eyeOffSetY={-eyeOffSetY}
          eyeRadious={eyeRadious}
        />
        <Eyes
          eyeOffSetX={+eyeOffSetX}
          eyeOffSetY={-eyeOffSetY}
          eyeRadious={eyeRadious}
        />
        <Mouth mouthWidth={mouthWidth} mouthRadious={mouthRadious} />
      </FaceContainer>
    </div>
  );
};
