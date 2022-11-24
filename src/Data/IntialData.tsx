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
    data: NL.Netherlands.data,
    backgroundColor: "rgba(255, 99, 132, 0.5)",
    borderColor: "",
  },
  {
    name: "Colombia",
    data: CO.Colombia.data,
    backgroundColor: "#ff00ff",
    borderColor: "#000000",
  },
  {
    name: "Poland",
    data: PO.Poland.data,
    backgroundColor: "#0000ff",
    borderColor: "#000000",
  },
  {
    name: "China",
    data: CH.China.data,
    backgroundColor: "#ff00ff",
    borderColor: "#000000",
  },
  {
    name: "Vietnam",
    data: VI.Vietnam.data,
    backgroundColor: "#33cec6",
    borderColor: "#000000",
  },
  {
    name: "USA",
    data: US["United States"].data,
    backgroundColor: "#00ff0d",
    borderColor: "#000000",
  },
  {
    name: "Japan",
    data: JP.Japan.data,
    backgroundColor: "#ffe600",
    borderColor: "#000000",
  },
];
