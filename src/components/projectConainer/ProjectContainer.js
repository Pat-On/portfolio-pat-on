import React from "react";
import classes from "./ProjectContainer.module.scss";

const ProjectContainer = (props) => {
  return (
    <div className={classes.projectContainer}>
      <img className={classes.projectContainer__img} src={signupForm} alt="" />
      <h3 className={classes.projectContainer__h3}>Sign-up Form</h3>
      <p className={classes.projectContainer__description}>
        Front-end application, created using React.js. App has implemented
        complete validation plus tips for user what is wrong
      </p>

      <a
        target="_blank"
        rel="noreferrer"
        className={classes.projectContainer__link__live}
        href="https://sign-up-form-patryk-nowak.netlify.app/"
      >
        Live Page
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className={classes.projectContainer__link__github}
        href="https://github.com/Pat-On/signup-form-assessment"
      >
        Source Code
      </a>
    </div>
  );
};
