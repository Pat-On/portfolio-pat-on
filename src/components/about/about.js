import React from "react";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg";
import classes from "./about.module.css";

const About = () => {
  return (
    <div className={classes.aboutPageContainer}>
      <h1>ABOUT</h1>

      <img
        className={classes.profileImg}
        src={ProfilePhoto}
        alt="Profile Picture"
      />
      <p>
        I'm a full stack developer who started from non IT background. I came
        from academic sector, where during my ph.d. studies I learn
        methodological and analytical approach to solve problems.
      </p>

      <p>
        I have appetite of curiosity in new technologies, which lead to my
        persistence and enjoyment to learn new things which then enable me to
        teach others, something I enjoy doing as well. (My experience in
        teaching and great curiosity, with persistence is giving me chance to
        enjoy getting to know new technologies and to learn new things.){" "}
      </p>

      <p>
        I am a well organized person, who able to work independently as well as
        in a team. This reflect in the achievement of my past career, where my
        team and I always produced high standards result and achieved the goal
        on time. (Well-organised person, who can work independently, but I'm as
        well good team player. During my career me and my team were always
        achieving high goals and standards.)
      </p>

      <p>
        One of my proudest achievement is I received the Grant of Ministry of
        Science and Higher Education of Republic of Poland (only 1000 students
        being awarded) twice during my studies at university. To achieve this, I
        set and focused on the goal, plan my time well and able to work under
        pressure. [I am result oriented and work well under pressure in order to
        achieve goals to tight deadline. That is why during my studies at
        University I received two times Grant Of Ministry of Science and Higher
        Education of Republic of Poland, which is granted to maximum 1 000
        students in Poland for academic year. ]
      </p>
      <p>
        I'm interested to find the work IT sector, I look forward to work with a
        dynamic team full of positive people and the challenges. [where I will
        have chance to challenge my self and to work with a great dynamic team
        full of positive people.]
      </p>
    </div>
  );
};

export default About;
