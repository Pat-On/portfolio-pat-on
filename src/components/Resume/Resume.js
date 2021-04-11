import React from "react";

import classes from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={classes.resumePageContainer}>
      <h1 className={classes.resumeH1}>RESUME</h1>
      {/* <p>
        <b>Thank You</b>
      </p> */}
      <p>Thank you for your time and interest.</p>
      <p>Please feel free to have a look at my CV using the button below.</p>

      <a href="https://drive.google.com/u/0/uc?id=1JbyK9xXztnC_9KMSvWcXTegpqxDu2hBV&export=download">
        <button className={classes.myButton}>Find My CV HERE</button>
      </a>
    </div>
  );
};

export default Resume;
