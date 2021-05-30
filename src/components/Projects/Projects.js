import React from "react";

import classes from "./Projects.module.scss";

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

const Projects = () => {
  return (
    <div className={classes.projectsPage}>
      <h1 className={classes.projectsPage__h1}>PROJECTS</h1>
      <h2 className={classes.projectsPage__h2__bigProj}>
        Noteworthy project built from start by me
      </h2>

      <div className={classes.projectsPage__myProjectsBigger}>
        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={signupForm}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>Sign-up Form</h3>
          <p className={classes.projectContainer__description}>
            Front-end application, created using React.js. App has implemented
            complete validation plus tips for user what is wrong
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://sign-up-form-patryk-nowak.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/signup-form-assessment"
          >
            Source Code
          </a>
        </div>

        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={portfolioProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>Portfolio</h3>
          <p className={classes.projectContainer__description}>
            React Application, where I used SASS, GRID and FlexBox to style it
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://patryk-nowak-portfolio.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/portfolio-pat-on"
          >
            Source Code
          </a>
        </div>
        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={fotoTvShowProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>TV Show Project</h3>
          <p className={classes.projectContainer__description}>
            Pure Java Script project, which is using the View Port Model.
            Application is using REST API 'TV MAZE' to fetch data.{" "}
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://cyf-patrykn-tv.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/tv-show-dom-project"
          >
            Source Code
          </a>
        </div>
      </div>

      {/* small projects */}

      <h2 className={classes.projectsPage__h2__smallProj}>
        Small projects made for practice
      </h2>

      <div className={classes.projectsPage__myProjectsSmaller}>
        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={jobListingProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>Job Listing</h3>
          <p className={classes.projectContainer__description}>
            Simple application made in react, which is fetching the data from
            REST API
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://cyf-pat-on-jobs.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/cyf-job-listing-react"
          >
            Source Code
          </a>
        </div>

        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={countriesProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>Countries</h3>
          <p className={classes.projectContainer__description}>
            Simple application made in react, which is using REST API 'REST
            Countries' to fetch data.
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://cyf-pat-on-countries-react.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/cyf-countries-react"
          >
            Source Code
          </a>
        </div>

        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={highScoreTableProj}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>High Score Table</h3>
          <p className={classes.projectContainer__description}>
            Simple application made in react, which is using data stored on
            local machine.
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://cyf-pat-on-scores.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/high-scores-react"
          >
            Source Code
          </a>
        </div>

        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={cyfhotelproject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>Hotel Page</h3>
          <p className={classes.projectContainer__description}>
            Simple application made in react, which is using data stored on
            local machine.
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://cyf-pat-on-hotel-react.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/cyf-hotel-react"
          >
            Source Code
          </a>
        </div>

        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={babyNameFinderProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>Baby name finder</h3>
          <p className={classes.projectContainer__description}>
            Simple application made in react, which is using data stored on
            local machine.
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://cyf-pat-on-baby-names.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/cyf-baby-names-react"
          >
            Source Code
          </a>
        </div>
      </div>
      {/* followed projects */}
      <h2 className={classes.projectsPage__h2__followed}>
        Projects made by following courses
      </h2>
      <div className={classes.projectsPage__projectFollowedCourses}>
        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={burgerProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>Burger Shop React</h3>
          <p className={classes.projectContainer__description}>
            App was done following that course: <br />
            <a
              target="_blank"
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
            >
              Maximilian Schwarzmüller, React - The Complete Guide (incl Hooks,
              React Router, Redux)
            </a>
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://react-my-burger-6df65.web.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/burger-shop-react"
          >
            Source Code
          </a>
        </div>

        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={forkifyProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>
            Forkify - cooking recipes
          </h3>
          <p className={classes.projectContainer__description}>
            App was done following that course: <br />
            <a
              target="_blank"
              href="https://www.udemy.com/course/the-complete-javascript-course/"
            >
              Jonas Schmedtmann, The Complete JavaScript Course 2021: From Zero
              to Expert!
            </a>
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://forkify-patryk.netlify.app/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/studyProjectForkify"
          >
            Source Code
          </a>
        </div>

        <div className={classes.projectContainer}>
          <img
            className={classes.projectContainer__img}
            src={maptyProject}
            alt=""
          />
          <h3 className={classes.projectContainer__h3}>
            Mapty - training tracker
          </h3>
          <p className={classes.projectContainer__description}>
            App was done following that course: <br />
            <a
              target="_blank"
              href="https://www.udemy.com/course/the-complete-javascript-course/"
            >
              Jonas Schmedtmann, The Complete JavaScript Course 2021: From Zero
              to Expert!
            </a>
          </p>

          <a
            target="_blank"
            className={classes.projectContainer__link__live}
            href="https://pat-on.github.io/StudyProjectMaptyApp/"
          >
            Live Page
          </a>
          <a
            target="_blank"
            className={classes.projectContainer__link__github}
            href="https://github.com/Pat-On/StudyProjectMaptyApp"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
