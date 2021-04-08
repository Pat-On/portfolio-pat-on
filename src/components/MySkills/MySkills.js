import React from "react";

import classes from "./MySkills.module.css";

import gitLogo from "../../assets/icons/git.png";
import css3Logo from "../../assets/icons/css3.png";
import html5Logo from "../../assets/icons/html5.png";
import jsLogo from "../../assets/icons/js.png";
import nodejsLogo from "../../assets/icons/nodejs.png";
import npmLogo from "../../assets/icons/npm.png";
import python3 from "../../assets/icons/python3.png";
import reactLogo from "../../assets/icons/react.png";
import reduxLogo from "../../assets/icons/redux.png";

const MySkills = () => {
  return (
    <div className={classes.aboutPageContainer}>
      <h1>My Skills</h1>
      <h2>Hard Skills</h2>
      <h3>Recently used technologies by me:</h3>

      <ul className={classes.unorderedList}>
        <li>
          <img className={classes.logo} src={jsLogo} alt="js logo" />
          <p>JavaScript</p>
        </li>
        <li>
          <img className={classes.logo} src={css3Logo} alt="css3 logo" />
          <p>CSS3</p>
        </li>
        <li>
          <img className={classes.logo} src={html5Logo} alt="html5 logo" />
          <p>html5</p>
        </li>
        <li>
          <img className={classes.logo} src={reactLogo} alt="react logo" />
          <p>React.js</p>
        </li>

        <li>
          <img className={classes.logo} src={reduxLogo} alt="redux.js logo" />
          <p>redux.js</p>
        </li>
        <li>
          <img className={classes.logo} src={gitLogo} alt="git logo" />
          <p> Git </p>
        </li>
        <li>
          <img className={classes.logo} src={npmLogo} alt="npm logo" />
          <p>npm.js</p>
        </li>
        <li>
          <img className={classes.logo} src={python3} alt="python3 logo" />
          <p> Python3</p>
        </li>
        <li>
          <img className={classes.logo} src={nodejsLogo} alt="node.js logo" />
          <p> Node.js</p>
        </li>
      </ul>

      <p style={{ color: "red" }}>Think over it</p>

      <h2>Soft Skills</h2>
      <p>
        In my academic career I had a chance to be a member of the teams, where
        we were working together on many different types of project. Most of
        them were focused on volunteer-social projects, science projects and
        cultural project. <br /> It was great chance to learn to work
        effectively under the pressure and to get better understanding of other
        people. It was great chance to develop my interpersonal and soft skills.
        My progress in this field gave me chance to managing and supporting my
        colleagues, what was great chance to test my soft skills. <br /> During
        my post academic experience I was traveling around the Europe getting to
        know many different great people and gaining experience in
        communication. My recent experience to work in customer service sector
        gave me the great chance to polish my soft skills in different role,
        what was great experience.
      </p>

      <ul>
        <li>Public speaking</li>
        <li>Communication</li>
        <li>Project management</li>
        <li>Organisational</li>
        <li>Leadership</li>
        <li>Problem solving </li>
        <li>Creativity</li>
        <li>Analytical thinking</li>
        <li>Attention to Detail</li>
      </ul>
    </div>
  );
};

export default MySkills;
