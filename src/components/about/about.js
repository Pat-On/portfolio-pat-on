import React from "react";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg";
import classes from "./about.module.css";

const About = () => {
  return (
    <div className={classes.aboutPageContainer}>
      <h1>ABOUT</h1>

      <img className={classes.profileImg} src={ProfilePhoto} alt="Profile" />
      <p>
        I'm a full stack developer who started from non IT background. I came
        from academic sector, where during my ph.d. studies I learn
        methodological and analytical approach to solving problems.
      </p>

      <p>
        I have appetite of curiosity in new technologies, which lead to my
        persistence and enjoyment to learn new things which then enable me to
        teach others, something I enjoy doing as well.
      </p>

      <p>
        I am a well organized person, who able to work independently as well as
        in a team. This reflect in the achievement of my past career, where my
        team and I always produced high standards result and achieved the goal
        on time.
      </p>

      <p>
        One of my proudest achievement is I received the Grant of Ministry of
        Science and Higher Education of Republic of Poland (only 1000 students
        being awarded) twice during my studies at university. To achieve this, I
        set and focused on the goal, plan my time well and able to work under
        pressure.
      </p>
      <p>
        I'm interested to find the work IT sector, I look forward to work with a
        dynamic team full of positive people and the challenges.
      </p>
    </div>
  );
};

export default About;
