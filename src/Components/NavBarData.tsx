import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";

const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Population",
    path: "/population",
    icon: <MdIcons.MdNaturePeople />,
    cName: "nav-text",
  },
  {
    title: "GitHub",
    path: "/",
    icon: <FaIcons.FaGithub />,
    cName: "nav-text",
  },
  {
    title: "Extra 2",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];

export default SideBarData;
