import React from "react";

import SkillBox from "../SkillBox/SkillBox";

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

const codingSkills = [
  {
    title: "JavaScript",
    altIMG: "JavaScript LOGO",
    logoSRC: jsLogo,
  },
  {
    title: "mongoDB",
    altIMG: "mongoDB LOGO",
    logoSRC: mongodb,
  },
  {
    title: "CSS3",
    altIMG: "CSS3 LOGO",
    logoSRC: css3Logo,
  },
  {
    title: "SASS",
    altIMG: "SASS LOGO",
    logoSRC: sass,
  },
  {
    title: "PostgreSQL",
    altIMG: "PostgreSQL logo by Julien Monty from icon-icon.com",
    logoSRC: postgress,
  },
  {
    title: "HTML5",
    altIMG: "HTML5 LOGO",
    logoSRC: html5Logo,
  },
  {
    title: "React.js",
    altIMG: "React.js Logo",
    logoSRC: reactLogo,
  },
  {
    title: "Redux.js",
    altIMG: "Redux.js Logo",
    logoSRC: reduxLogo,
  },
  {
    title: "GIT",
    altIMG: "GIT Logo",
    logoSRC: gitLogo,
  },
  {
    title: "npm.js",
    altIMG: "npm.js Logo",
    logoSRC: npmLogo,
  },
  {
    title: "Python3",
    altIMG: "Python3 Logo",
    logoSRC: python3,
  },
  {
    title: "Node.js",
    altIMG: "Node.js Logo",
    logoSRC: nodejsLogo,
  },
];

const softSkills = [
  {
    title: "Analytical thinking",
    altIMG: "Icon made by www.wishforge.games from www.freeicons.io",
    logoSRC: analyticalThinking,
  },
  {
    title: "Problem solving",
    altIMG: "Icon made by MD Badsha Meah from www.freeicons.io",
    logoSRC: problemSolving,
  },
  {
    title: "Attention to Detail",
    altIMG: "Icon made by icon king1 from www.freeicons.io",
    logoSRC: attentionToDetails,
  },
  {
    title: "Public speaking",
    altIMG: "Icon made by icon king1 from www.freeicons.io",
    logoSRC: speakerIcon,
  },
  {
    title: "Organisational",
    altIMG: "Icon made by icon king1 from www.freeicons.io",
    logoSRC: organisational,
  },
  {
    title: "Project management",
    altIMG: "Icon made by icon king1 from www.freeicons.io",
    logoSRC: project,
  },
  {
    title: "Leadership",
    altIMG: "Icon made by MD Badsha Meah from www.freeicons.io",
    logoSRC: leadership,
  },
  {
    title: "Creativity",
    altIMG: "Icon made by MD Badsha Meah from www.freeicons.io",
    logoSRC: creativity,
  },
  {
    title: "Communication",
    altIMG: "Icon made by MD Badsha Meah from www.freeicons.io",
    logoSRC: communication,
  },
];

const MySkills = () => {
  return (
    <div className={classes.mySkills}>
      <h1 className={classes.mySkills__h1}>MY SKILLS</h1>
      <h2 className={classes.mySkills__h2__hard}>Hard Skills</h2>
      <h3 className={classes.mySkills__h3__hard}>
        Recently used technologies by me:
      </h3>
      <ul className={classes.mySkills__unorderedListHard}>
        {codingSkills.map((item, index) => (
          <li key={index}>
            <SkillBox {...item}></SkillBox>
          </li>
        ))}
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
        {softSkills.map((item, index) => (
          <li key={index}>
            <SkillBox {...item}></SkillBox>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySkills;
