import NL from "../Data/nederlands.json";
import CO from "../Data/colombia.json";
import PO from "../Data/poland.json";
import CH from "../Data/china.json";
import VI from "../Data/vietnam.json";
import US from "../Data/usa.json";
import JP from "../Data/japan.json";
import { Value } from "sass";

interface YearData {
  [key: string]: number | undefined;
}

interface Country {
  name: string;
  data: YearData[];
  backgroundColor: string;
  borderColor: string;
}

export const dataFields = {
  year: "year",
  population: "population",
  Co2perCapita: "cement_co2_per_capita",
  // "cement_co2",
  // "co2",
  // "co2_growth_abs",
  // "co2_growth_prct",
  // "co2_per_capita",
  // "co2_per_unit_energy",
  // "coal_co2",
  // "coal_co2_per_capita",
  // "cumulative_cement_co2",
  // "cumulative_co2",
  // "cumulative_coal_co2",
  // "cumulative_flaring_co2",
  // "cumulative_gas_co2",
  // "cumulative_oil_co2",
  // "cumulative_other_co2",
  // "energy_per_capita",
  // "flaring_co2",
  // "flaring_co2_per_capita",
  // "gas_co2",
  // "gas_co2_per_capita",
  // "oil_co2",
  // "oil_co2_per_capita",
  // "other_co2_per_capita",
  // "other_industry_co2",
  // "primary_energy_consumption",
  // "share_global_cement_co2",
  // "share_global_co2",
  // "share_global_coal_co2",
  // "share_global_cumulative_cement_co2",
  // "share_global_cumulative_co2",
  // "share_global_cumulative_coal_co2",
  // "share_global_cumulative_flaring_co2",
  // "share_global_cumulative_gas_co2",
  // "share_global_cumulative_oil_co2",
  // "share_global_cumulative_other_co2",
  // "share_global_flaring_co2",
  // "share_global_gas_co2",
  // "share_global_oil_co2",
  // "share_global_other_co2",
};

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
