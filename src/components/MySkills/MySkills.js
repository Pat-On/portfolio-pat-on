import React from "react";

import classes from "./MySkills.module.scss";

import gitLogo from "../../assets/icons/git.png";
import css3Logo from "../../assets/icons/css3.png";
import html5Logo from "../../assets/icons/html5.png";
import jsLogo from "../../assets/icons/js.png";
import nodejsLogo from "../../assets/icons/nodejs.png";
import npmLogo from "../../assets/icons/npm.png";
import python3 from "../../assets/icons/python3.png";
import reactLogo from "../../assets/icons/react.png";
import reduxLogo from "../../assets/icons/redux.png";
import sass from "../../assets/icons/sass_original_logo_icon_146350.svg";
import postgress from "../../assets/icons/postgresql_plain_wordmark_logo_icon_146390.svg";
import mongodb from "../../assets/icons/icons8-mongodb.svg";

import speakerIcon from "../../assets/icons/speakerIcon.png";
import communication from "../../assets/icons/communication.png";
import project from "../../assets/icons/project.png";
import organisational from "../../assets/icons/organisational.png";
import leadership from "../../assets/icons/leadership.png";
import problemSolving from "../../assets/icons/problemSolving.png";
import creativity from "../../assets/icons/creativity.png";
import analyticalThinking from "../../assets/icons/analyticalThinking.png";
import attentionToDetails from "../../assets/icons/attentionToDetails.png";

// SLQ ICON made by Free from flaticon.com
// postgresql by Julien Monty from icon-icon.com
// sass by Julien Monty

const MySkills = () => {
  return (
    <div className={classes.mySkills}>
      <h1 className={classes.mySkills__h1}>MY SKILLS</h1>
      <h2 className={classes.mySkills__h2__hard}>Hard Skills</h2>
      <h3 className={classes.mySkills__h3__hard}>
        Recently used technologies by me:
      </h3>
      <ul className={classes.mySkills__unorderedListHard}>
        <li>
          <div className={classes.card}>
            <div className={classes.card__front}>
              <img className={classes.logo} src={jsLogo} alt="js logo" />
            </div>
            <div className={classes.card__back}>
              <p>JavaScript</p>
            </div>
          </div>
        </li>
        <li>
          <img className={classes.logo} src={mongodb} alt="mongoDB logo" />
          <p>mongoDB</p>
        </li>
        <li>
          <img className={classes.logo} src={css3Logo} alt="css3 logo" />
          <p>CSS3</p>
        </li>
        <li>
          <img
            className={classes.logo}
            src={sass}
            alt="sass logo by Julien Monty from icon-icon.com"
          />
          <p>SASS</p>
        </li>
        <li>
          <img
            className={classes.logo}
            src={postgress}
            alt="postgress logo by Julien Monty from icon-icon.com"
          />
          <p>Postgress</p>
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
      <h2 className={classes.mySkills__h2__soft}>Soft Skills</h2>
      <div className={classes.mySkills__softDescription}>
        <p className={classes.mySkillsPElement}>
          In my academic career I have been a member of many teams, where we
          were working together on many different types of projects. Most of
          them were focused on volunteer-social projects, science and cultural
          project.
        </p>
        <p className={classes.mySkillsPElement}>
          It was a great chance to learn to work effectively under pressure and
          to get a better understanding of other people. This in turn really
          helped me to develop my interpersonal and soft skills. My progress in
          this field gave me the chance to manage and support my colleagues,
          which was an excellent opportunity to test out my soft skills.
        </p>
        <p className={classes.mySkillsPElement}>
          During my post academic experience, I was traveling around Europe. I
          got to meet and to know many different people and gained lots of
          experience in communication. My recent experience was working in the
          customer service industry, this gave me the chance to perfect my soft
          skills in a different sector, which gave me invaluable experience.
        </p>
      </div>

      <h3 className={classes.mySkills__h3__soft}>Some chosen softs skills:</h3>
      <ul className={classes.mySkills__unorderedListSoft}>
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
    </div>
  );
};

export default MySkills;
