import BubbleAnimated from "../Components/GoogleCharts/BubbleAnimated";
import WordTreeChart from "../Components/GoogleCharts/WordTree";
import WorldData from "../Components/WorldData";
import "./Css/styles.css";

const DynamicData = () => {
  return (
    <div className="general-background">
      <h1>The Dynamic World</h1>
      <WorldData />
      {/* <WordTreeChart /> */}
      {/* <BubbleAnimated /> */}
    </div>
  );
};

export default DynamicData;
