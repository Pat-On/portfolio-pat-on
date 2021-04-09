import React from "react";

import classes from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={classes.resumePageContainer}>
      <h1>Resume</h1>
      <p>
        <b>Thank You</b> for your time and showed interest to get know something
        about me.
      </p>

      <a href="https://drive.google.com/u/0/uc?id=1gOU1dMzAkWQmzc2m-B8a6zc22XSlp7DC&export=download">
        <button>Find My CV HERE</button>
      </a>
      <p>Thanks for watching</p>
    </div>
  );
};

export default Resume;
