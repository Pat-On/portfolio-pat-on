import React, { useState } from "react";

import Aux from "../Auxillary/Auxillary";
import Toolbar from "../../components/navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/navigation/Sidedrwer/Sidedrawer";

import classes from "./Layout.module.scss";

const Layout = (props) => {
  //!TODO SIDE DRAWER
  const [sideDrawerIsVisible, setSideDrawerVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerVisible(false);
  };
  const sideDrawerToggleHandler = () => {
    setSideDrawerVisible(!sideDrawerIsVisible);
  };

  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <main className={classes.content}>{props.children}</main>
      <footer>THIS IS FOOTER</footer>
    </Aux>
  );
};

export default Layout;
