import { arc } from "d3";

const Mouth = ({ mouthRadious, mouthWidth }: any) => {
  const moutharc: any = arc()
    .innerRadius(mouthRadious)
    .outerRadius(mouthRadious - mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
  return <path d={moutharc()}></path>;
};

export default Mouth;
