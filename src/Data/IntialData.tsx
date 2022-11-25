import NL from "../Data/nederlands.json";
import CO from "../Data/colombia.json";
import PO from "../Data/poland.json";
import CH from "../Data/china.json";
import VI from "../Data/vietnam.json";
import US from "../Data/usa.json";
import JP from "../Data/japan.json";

interface YearData {
  [key: string]: number | undefined;
}

interface Country {
  name: string;
  data: YearData[];
  backgroundColor: string;
  borderColor: string;
}

export const initialCountries: Country[] = [
  {
    name: "Netherlands",
    data: NL.Netherlands.data,
    backgroundColor: "#003f5c",
    borderColor: "",
  },
  {
    name: "Colombia",
    data: CO.Colombia.data,
    backgroundColor: "#bc5090",
    borderColor: "#000000",
  },
  {
    name: "Poland",
    data: PO.Poland.data,
    backgroundColor: "#de5a79",
    borderColor: "#000000",
  },
  {
    name: "China",
    data: CH.China.data,
    backgroundColor: "#5adebf",
    borderColor: "#000000",
  },
  {
    name: "Vietnam",
    data: VI.Vietnam.data,
    backgroundColor: "#6361ff",
    borderColor: "#000000",
  },
  {
    name: "USA",
    data: US["United States"].data,
    backgroundColor: "#ff6361",
    borderColor: "#000000",
  },
  {
    name: "Japan",
    data: JP.Japan.data,
    backgroundColor: "#ffa600",
    borderColor: "#000000",
  },
];
