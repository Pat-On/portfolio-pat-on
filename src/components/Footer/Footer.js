import React from "react";

import classes from "./Footer.module.scss";

import emailLogo from "../../assets/icons/basic_mail.svg";
import githubLogo from "../../assets/icons/iconmonstr-github-2.svg";
import linkedInLogo from "../../assets/icons/iconmonstr-linkedin-3.svg";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.footer__listOfIcons}>
        <li>
          <a className={classes.links} href="mailto: patryk.r.nowak@gmail.com">
            <img src={emailLogo} alt="Email icon" />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            className={classes.links}
            href="https://github.com/Pat-On"
            target="_blank"
          >
            <img src={githubLogo} alt="Git Hub logo" />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            className={classes.links}
            target="_blank"
            href="https://www.linkedin.com/in/patryknowak1990/"
          >
            <img src={linkedInLogo} alt="LinkedIn logo" />
          </a>
        </li>
      </ul>

      <a
        className={classes.footer__cv}
        href="https://drive.google.com/u/0/uc?id=1ZRNlv_CfjR3pqzYbbeKq_NMJCQ_TFA8N&export=download"
      >
        Find My CV HERE
      </a>

      <div className={classes.footer__legal}>
        &copy; 2021 Made by Patryk Nowak
      </div>
    </footer>
  );
};

export default Footer;
