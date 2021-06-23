import React from "react";
import Particles from "react-particles-js";

import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg";
import classes from "./about.module.scss";

const About = (props) => {
  const toContactPage = (event) => {
    event.preventDefault();
    props.history.push("/contact");
  };

  return (
    <div className={classes.container}>
      <Particles
        className={classes.container__particles}
        params={{
          background: {
            color: {
              value: "#dbe2ef",
            },
          },

          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                },
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              grab: {
                distance: 400,
              },
              light: {
                shadow: {
                  color: {
                    value: "#185adb",
                  },
                },
              },
            },
          },
          particles: {
            color: {
              value: "#185adb",
            },
            links: {
              color: {
                value: "#185adb",
              },
              distance: 150,
              enable: true,
              opacity: 0.4,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              path: {},
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
            },
            number: {
              density: {
                enable: true,
              },
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.1,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 0.1,
                max: 10,
              },
              animation: {
                enable: true,
                speed: 20,
                minimumValue: 0.1,
              },
            },
          },
        }}
      />
      <div className={classes.welcome}>
        <h1 className={classes.welcome__titleH1}>Hi,</h1>
        <h1 className={classes.welcome__titleH1}>I'm PATRYK,</h1>
        <h2 className={classes.welcome__titleH1}>Web Developer</h2>
        <button className={classes.welcome__myButton} onClick={toContactPage}>
          CONTACT ME
        </button>
      </div>

      <div class={classes.about}>
        <h1 className={classes.about__title}>ABOUT</h1>
        <figure className={classes.about__figure}>
          <img
            className={classes.about__img}
            src={ProfilePhoto}
            alt="Profile"
          />
          <figcaption className={classes.about__figcaption}>
            Looking for new challenges
          </figcaption>
        </figure>

        <div className={classes.about__description}>
          <p className={classes.aboutPElement}>
            I'm a full stack developer who started from a non IT background. I
            came from the academic sector, where
            <b>
              during my P.H.D studies I have learnt a methodological and
              analytical approach to solve problems.
            </b>
          </p>

          <p className={classes.aboutPElement}>
            <b>I have a burning passion to learn new technologies, </b> which in
            turn makes me a very persistent and a consistent learner. I also
            enjoy teaching all the things that I have learnt and get a lot of
            fulfilment from this.
          </p>

          {/* <p className={classes.aboutPElement}>
            <b>I am a very organized person, </b> who can work independently, I
            also work well in a team. This is reflected in my past achievements
            in my career, where my team and I always produced high standards,
            got the result desired and achieved goals on time.
          </p> */}

          <p className={classes.aboutPElement}>
            <b>
              My proudest achievement is that I received the Grant of Ministry
              of Science and Higher Education of Republic of Poland (only 1000
              students were awarded) twice during my studies at university.{" "}
            </b>
            To achieve this, I set and focused on the goal, planned my time well
            and I was able to work under immense pressure.
          </p>
          <p className={classes.aboutPElement}>
            <b>
              I have a burning desire to work in the tech industry, I am excited
              to work with a dynamic team full of positive like-minded people.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
