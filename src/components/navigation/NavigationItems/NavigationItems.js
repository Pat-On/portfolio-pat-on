import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/about">About</NavigationItem>
    <NavigationItem link="/skills">My Skills</NavigationItem>
    <NavigationItem link="/projects">Projects</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
    <NavigationItem link="/resume">Resume</NavigationItem>
  </ul>
);

export default navigationItems;
