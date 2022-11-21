import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import styled from "styled-components";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { FaCog, FaUserTie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #ffdb58;
    padding: 5px;
    border-radius: 10px;
  }
`;

const NavBar: Function = (): any => {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "145vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sidebar style={styles.sideBarHeight}>
      <Menu
      // iconShape="square"
      >
        <NavLink to={"/population"}>
          <MenuItem icon={<HiOutlineChartSquareBar />}> Population </MenuItem>
        </NavLink>

        <MenuItem icon={<FaUserTie />}>To Define</MenuItem>
        <MenuItem icon={<FaCog />}>To Define 2</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default NavBar;
