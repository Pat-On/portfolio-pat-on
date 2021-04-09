import React from "react";
// import { NavLink } from "react-router-dom";

import classes from "./homePage.module.css";

const HomePage = (props) => {
  // temporary
  const toContactPage = (event) => {
    event.preventDefault();
    props.history.push("/contact");
  };

  return (
    <div className={classes.homePageContainer}>
      <h1 className={classes.titleH1}>Hi,</h1>
      <h1 className={classes.titleH1}>I'm PATRYK,</h1>
      <h1 className={classes.titleH1}>Web Developer</h1>
      <h2 className={classes.titleH2}>Seeking The Next Exciting Challenge</h2>
      <button className={classes.myButton} onClick={toContactPage}>
        CONTACT ME
      </button>
    </div>
  );
};

export default HomePage;
