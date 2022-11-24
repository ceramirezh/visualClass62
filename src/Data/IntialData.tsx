import NL from "../Data/nederlands.json";
import CO from "../Data/colombia.json";
import PO from "../Data/poland.json";
import CH from "../Data/china.json";
import VI from "../Data/vietnam.json";
import US from "../Data/usa.json";
import JP from "../Data/japan.json";

export const initialCountries = [
  { netherlands: NL.Netherlands.data },
  { colombia: CO.Colombia.data },
  { poland: PO.Poland.data },
  { china: CH.China.data },
  { vietnam: VI.Vietnam.data },
  { usa: US["United States"].data },
  { japan: JP.Japan.data },
];
