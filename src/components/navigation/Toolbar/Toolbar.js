import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../../../UI/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <header>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
