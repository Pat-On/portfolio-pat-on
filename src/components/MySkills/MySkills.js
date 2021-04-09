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

import speakerIcon from "../../assets/icons/speakerIcon.png";
import communication from "../../assets/icons/communication.png";
import project from "../../assets/icons/project.png";
import organisational from "../../assets/icons/organisational.png";
import leadership from "../../assets/icons/leadership.png";
import problemSolving from "../../assets/icons/problemSolving.png";
import creativity from "../../assets/icons/creativity.png";
import analyticalThinking from "../../assets/icons/analyticalThinking.png";
import attentionToDetails from "../../assets/icons/attentionToDetails.png";

const MySkills = () => {
  return (
    <div className={classes.mySkillsContainer}>
      <h1 className={classes.skillsH1}>MY SKILLS</h1>
      <h2 className={classes.skillsH2}>Hard Skills</h2>
      <h3 className={classes.skillsH3}>Recently used technologies by me:</h3>
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
      <h2 className={classes.skillsH2}>Soft Skills</h2>
      <p className={classes.mySkillsPElement}>
        In my academic career I had a chance to be a member of the teams, where
        we were working together on many different types of project. Most of
        them were focused on volunteer-social projects, science projects and
        cultural project.
      </p>
      <p className={classes.mySkillsPElement}>
        It was great chance to learn to work effectively under the pressure and
        to get better understanding of other people. It was great chance to
        develop my interpersonal and soft skills. My progress in this field gave
        me chance to managing and supporting my colleagues, what was great
        chance to test my soft skills.
      </p>
      <p className={classes.mySkillsPElement}>
        During my post academic experience I was traveling around the Europe
        getting to know many different great people and gaining experience in
        communication. My recent experience to work in customer service sector
        gave me the great chance to polish my soft skills in different role,
        what was great experience.
      </p>
      <h3 className={classes.skillsH3}>Some chosen softs skills:</h3>
      <ul className={classes.unorderedList}>
        <li>
          <img
            className={classes.logo}
            src={analyticalThinking}
            alt="Icon made by www.wishforge.games from www.freeicons.io"
          />
          <p>Analytical thinking</p>
        </li>
        <li>
          <img
            className={classes.logo}
            src={problemSolving}
            alt="Icon made by MD Badsha Meah from www.freeicons.io"
          />
          <p>Problem solving </p>
        </li>

        <li>
          <img
            className={classes.logo}
            src={attentionToDetails}
            alt="Icon made by icon king1 from www.freeicons.io"
          />
          <p>Attention to Detail</p>
        </li>
        <li>
          <img
            className={classes.logo}
            src={speakerIcon}
            alt="Icon made by icon king1 from www.freeicons.io"
          />
          <p>Public speaking</p>
        </li>
        <li>
          <img
            className={classes.logo}
            src={organisational}
            alt="Icon made by ColourCreatype from www.freeicons.io"
          />
          <p>Organisational</p>
        </li>

        <li>
          <img
            className={classes.logo}
            src={project}
            alt="Icon made by icon king1 from www.freeicons.io"
          />
          <p>Project management</p>
        </li>

        <li>
          <img
            className={classes.logo}
            src={leadership}
            alt="Icon made by MD Badsha Meah from www.freeicons.io"
          />
          <p>Leadership</p>
        </li>

        <li>
          <img
            className={classes.logo}
            src={creativity}
            alt="Icon made by MD Badsha Meah from www.freeicons.io"
          />
          <p>Creativity</p>
        </li>
        <li>
          <img
            className={classes.logo}
            src={communication}
            alt="Icon made by MD Badsha Meah from www.freeicons.io"
          />
          <p>Communication</p>
        </li>
      </ul>
      <p></p>
    </div>
  );
};

export default MySkills;
