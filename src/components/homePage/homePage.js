import React from "react";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg";

import classes from "./homePage.module.css";

const HomePage = (props) => {
  // temporary

  return (
    <div className={classes.homePageContainer}>
      <div>
        <h1>
          Hi, <br />
          I'm PATRYK, <br />
          Web Developer
        </h1>
        <h2>Seeking The Next Exciting Challenge</h2>
      </div>

      <img
        className={classes.profileImg}
        src={ProfilePhoto}
        alt="Profile Picture"
      />
    </div>
  );
};

export default HomePage;
