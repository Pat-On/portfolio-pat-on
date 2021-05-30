import React from "react";

import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/" exact>
      About
    </NavigationItem>
    {/* <NavigationItem link="/about">About</NavigationItem> */}
    <NavigationItem link="/skills">My Skills</NavigationItem>
    <NavigationItem link="/projects">Projects</NavigationItem>
    {/* <NavigationItem link="/resume">Resume</NavigationItem> */}
    <NavigationItem link="/contact">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
