import { Link } from "react-router-dom";
import { useState } from "react";
import NavBarData from "./NavBarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import "./Css/styleNavbar.scss";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="menu-bars" onClick={showSidebar}>
            <FaIcons.FaBars />
          </div>
        </div>
        <div>
          {sidebar ? (
            <div className="nav-menu">
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <AiIcons.AiOutlineClose className="menu-bars" />
                </li>
                {NavBarData.map((item, i) => {
                  return (
                    <li key={i} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
