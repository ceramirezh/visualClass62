import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as TfiIcons from "react-icons/tfi";

const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Global Co2",
    path: "/co2",
    icon: <TiIcons.TiWeatherWindy />,
    cName: "nav-text",
  },
  {
    title: "Class62 Population",
    path: "/62population",
    icon: <MdIcons.MdNaturePeople />,
    cName: "nav-text",
  },
  {
    title: "Dynamic Data",
    path: "/dynamic_data",
    icon: <MdIcons.MdDynamicFeed />,
    cName: "nav-text",
  },
  {
    title: "Fun Data",
    path: "/fun_data",
    icon: <TfiIcons.TfiCommentsSmiley />,
    cName: "nav-text",
  },
  {
    title: "Info",
    path: "/info",
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: "nav-text",
  },
];

export default SideBarData;
