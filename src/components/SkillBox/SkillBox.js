import React from "react";

import classes from "./SkillBox.module.scss";

const SkillBox = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__front}>
        <img className={classes.logo} src={props.logoSRC} alt={props.altIMG} />
      </div>
      <div className={classes.card__back}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default SkillBox;
