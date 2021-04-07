import React from "react";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg";

const HomePage = (props) => {
  // temporary

  return (
    <div>
      <div>
        <h1>Hi, I'm PATRYK, web developer</h1>
        <h2>Seeking The Next Exciting Challenge</h2>
      </div>

      <img src={ProfilePhoto} alt="Profile Picture" />
    </div>
  );
};

export default HomePage;
