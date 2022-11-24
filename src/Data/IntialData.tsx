import NL from "../Data/nederlands.json";
import CO from "../Data/colombia.json";
import PO from "../Data/poland.json";
import CH from "../Data/china.json";
import VI from "../Data/vietnam.json";
import US from "../Data/usa.json";
import JP from "../Data/japan.json";

export const initialCountries = [
  {
    name: "Netherlands",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
    data: NL.Netherlands.data,
  },
  { name: "Colombia", backgroundColor: "#ff00ff", data: CO.Colombia.data },
  { name: "Poland", backgroundColor: "#0000ff", data: PO.Poland.data },
  { name: "China", backgroundColor: "#ff00ff", data: CH.China.data },
  { name: "Vietnam", backgroundColor: "#33cec6", data: VI.Vietnam.data },
  { name: "USA", backgroundColor: "#00ff0d", data: US["United States"].data },
  { name: "Japan", backgroundColor: "#ffe600", data: JP.Japan.data },
];
