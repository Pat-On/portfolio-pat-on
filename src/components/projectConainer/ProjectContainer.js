import React from "react";
import classes from "./ProjectContainer.module.scss";

const ProjectContainer = (props) => {
  let description = (
    <p className={classes.projectContainer__description}>{props.description}</p>
  );

  if (props.linkLive) {
    description = (
      <p className={classes.projectContainer__description}>
        {props.description} <br />
        <a target="_blank" rel="noreferrer" href={props.linkToDescription}>
          {props.descriptionLinkToFollowed}
        </a>
      </p>
    );
  }

  return (
    <div className={classes.projectContainer}>
      <img className={classes.projectContainer__img} src={props.img} alt="" />
      <h3 className={classes.projectContainer__h3}>{props.title}</h3>
      {description}
      <a
        target="_blank"
        rel="noreferrer"
        className={classes.projectContainer__link__live}
        href={props.linkLive}
      >
        Live Page
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className={classes.projectContainer__link__github}
        href={props.linkGithub}
      >
        Source Code
      </a>
    </div>
  );
};

export default ProjectContainer;
