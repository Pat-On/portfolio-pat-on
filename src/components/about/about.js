import React from "react";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg";
import classes from "./about.module.css";

const About = () => {
  return (
    <div className={classes.aboutPageContainer}>
      <h1 className={classes.aboutTitle}>ABOUT</h1>

      <img className={classes.profileImg} src={ProfilePhoto} alt="Profile" />
      <p className={classes.aboutPElement}>
        I'm a full stack developer who started from non IT background. I came
        from academic sector, where{" "}
        <b>
          during my ph.d. studies I learn methodological and analytical approach
          to solving problems.
        </b>
      </p>

      <p className={classes.aboutPElement}>
        <b>I have appetite of curiosity in new technologies,</b> which lead to
        my persistence and enjoyment to learn new things which then enable me to
        teach others, something I enjoy doing as well.
      </p>

      <p className={classes.aboutPElement}>
        <b>I am a well organized person,</b> who able to work independently as
        well as in a team. This reflect in the achievement of my past career,
        where my team and I always produced high standards result and achieved
        the goal on time.
      </p>

      <p className={classes.aboutPElement}>
        <b>
          One of my proudest achievement is I received the Grant of Ministry of
          Science and Higher Education of Republic of Poland{" "}
        </b>
        (only 1000 students being awarded) twice during my studies at
        university. To achieve this, I set and focused on the goal, plan my time
        well and able to work under pressure.
      </p>
      <p className={classes.aboutPElement}>
        <b>
          I'm interested to find the work IT sector, I look forward to work with
          a dynamic team full of positive people and the challenges.
        </b>
      </p>
    </div>
  );
};

export default About;
