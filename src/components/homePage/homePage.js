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
      <h1>
        Hi, <br />
        I'm PATRYK, <br />
        Web Developer
      </h1>
      <h2>Seeking The Next Exciting Challenge</h2>
      {/* <a href="#" class="myButton">
        codecanyon
      </a> */}
      <button className={classes.myButton} onClick={toContactPage}>
        CONTACT ME
      </button>
    </div>
  );
};

export default HomePage;
