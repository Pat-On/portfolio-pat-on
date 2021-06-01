import React from "react";

import classes from "./Projects.module.scss";
import ProjectContainer from "../projectConainer/ProjectContainer";

import fotoTvShowProject from "../../assets/projectsPicture/tvShowProject.jpg";
import babyNameFinderProject from "../../assets/projectsPicture/babyNameFinderProject.jpg";
import burgerProject from "../../assets/projectsPicture/burgerProject.jpg";
import countriesProject from "../../assets/projectsPicture/countriesProject.jpg";
import cyfhotelproject from "../../assets/projectsPicture/cyfhotelproject.jpg";
import forkifyProject from "../../assets/projectsPicture/forkifyProject.jpg";
import highScoreTableProj from "../../assets/projectsPicture/highScoreTableProj.jpg";
import jobListingProject from "../../assets/projectsPicture/jobListingProject.jpg";
import maptyProject from "../../assets/projectsPicture/maptyProject.jpg";
import portfolioProject from "../../assets/projectsPicture/portfolioV2.jpg";
import signupForm from "../../assets/projectsPicture/signupForm.JPG";

const myBigProj = [
  {
    title: "Sign-up Form",
    img: signupForm,
    description:
      "Front-end application, created using React.js. App has implemented complete validation plus tips for user what is wrong",
    linkLive: "https://sign-up-form-patryk-nowak.netlify.app/",
    linkGithub: "https://github.com/Pat-On/signup-form-assessment",
  },
  {
    title: "Portfolio",
    img: portfolioProject,
    description:
      "React Application, where I used SASS, GRID and FlexBox to style it",
    linkLive: "https://patryk-nowak-portfolio.netlify.app/",
    linkGithub: "https://github.com/Pat-On/portfolio-pat-on",
  },
  {
    title: "TV Show Project",
    img: fotoTvShowProject,
    description:
      "Pure Java Script project, which is using the View Port Model Application is using REST API 'TV MAZE' to fetch data",
    linkLive: "https://cyf-patrykn-tv.netlify.app/",
    linkGithub: "https://github.com/Pat-On/tv-show-dom-project",
  },
];

const mySmallProj = [
  {
    title: "Job Listing",
    img: jobListingProject,
    description:
      "Simple application made in react, which is fetching the data from REST API",
    linkLive: "https://cyf-pat-on-jobs.netlify.app/",
    linkGithub: "https://github.com/Pat-On/cyf-job-listing-react",
  },
  {
    title: "Countries",
    img: countriesProject,
    description:
      "Simple application made in react, which is using REST API 'REST Countries' to fetch data.",
    linkLive: "https://cyf-pat-on-countries-react.netlify.app/",
    linkGithub: "https://github.com/Pat-On/cyf-countries-react",
  },
  {
    title: "High Score Table<",
    img: highScoreTableProj,
    description:
      "Simple application made in react, which is using data stored on local machine.",
    linkLive: "https://cyf-pat-on-scores.netlify.app/",
    linkGithub: "https://github.com/Pat-On/high-scores-react",
  },
  {
    title: "Hotel Page<",
    img: cyfhotelproject,
    description:
      "Simple application made in react, which is using data stored on local machine.",
    linkLive: "https://cyf-pat-on-hotel-react.netlify.app/",
    linkGithub: "https://github.com/Pat-On/cyf-hotel-react",
  },

  {
    title: "Baby name finder",
    img: babyNameFinderProject,
    description:
      "Simple application made in react, which is using data stored on local machine..",
    linkLive: "https://cyf-pat-on-baby-names.netlify.app/",
    linkGithub: "https://github.com/Pat-On/cyf-baby-names-react",
  },
];

const followedProj = [
  {
    title: "Burger Shop React",
    img: burgerProject,
    description: "App was done following that course:",
    descriptionLinkToFollowed:
      "Maximilian Schwarzmüller, React - The Complete Guide (incl Hooks, React Router, Redux",
    linkToDescription:
      "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    linkLive: "https://react-my-burger-6df65.web.app/",
    linkGithub: "https://github.com/Pat-On/burger-shop-react",
  },
  {
    title: " Forkify - cooking recipes",
    img: forkifyProject,
    description: "App was done following that course:",
    descriptionLinkToFollowed:
      "Jonas Schmedtmann, The Complete JavaScript Course 2021: From Zero to Expert!",
    linkToDescription:
      "https://www.udemy.com/course/the-complete-javascript-course/",
    linkLive: "https://forkify-patryk.netlify.app/",
    linkGithub: "https://github.com/Pat-On/studyProjectForkify",
  },
  {
    title: "Mapty - training tracker",
    img: maptyProject,
    description: "App was done following that course:",
    descriptionLinkToFollowed:
      "Jonas Schmedtmann, The Complete JavaScript Course 2021: From Zero to Expert!",
    linkToDescription:
      "https://www.udemy.com/course/the-complete-javascript-course/",
    linkLive: "https://pat-on.github.io/StudyProjectMaptyApp/",
    linkGithub: "https://github.com/Pat-On/StudyProjectMaptyApp",
  },
];

const Projects = () => {
  return (
    <div className={classes.projectsPage}>
      <h1 className={classes.projectsPage__h1}>PROJECTS</h1>
      <h2 className={classes.projectsPage__h2__bigProj}>
        Noteworthy project built from start by me
      </h2>

      {/* big projects */}

      <div className={classes.projectsPage__myProjectsBigger}>
        {myBigProj.map((item, index) => {
          return <ProjectContainer {...item} key={index} />;
        })}
      </div>

      {/* small projects */}

      <h2 className={classes.projectsPage__h2__smallProj}>
        Small projects made for practice
      </h2>

      <div className={classes.projectsPage__myProjectsSmaller}>
        {mySmallProj.map((item, index) => {
          return <ProjectContainer {...item} key={index} />;
        })}
      </div>

      {/* followed projects */}

      <h2 className={classes.projectsPage__h2__followed}>
        Projects made by following courses
      </h2>

      <div className={classes.projectsPage__projectFollowedCourses}>
        {followedProj.map((item, index) => {
          return <ProjectContainer {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
