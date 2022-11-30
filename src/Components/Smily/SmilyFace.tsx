import { useState } from "react";
import { FullFace } from "./FullFace";

const SmilyFace: any = ({ width, height, array }: any) =>
  array.map(() => {
    return (
      <FullFace
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={10}
        eyeOffSetX={20 * Math.random()}
        eyeOffSetY={30 * Math.random()}
        eyeRadious={10}
        mouthWidth={5 * Math.random() * 10}
        mouthRadious={10 * Math.random() * 5}
      />
    );
  });

export default SmilyFace;
