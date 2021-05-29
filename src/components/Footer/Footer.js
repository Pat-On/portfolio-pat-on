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
          <img src={emailLogo} alt="Email icon" />
        </li>
        <li>
          <img src={githubLogo} alt="Git Hub logo" />
        </li>
        <li>
          <img src={linkedInLogo} alt="LinkedIn logo" />
        </li>
      </ul>

      <a
        className={classes.footer__cv}
        href="https://drive.google.com/u/0/uc?id=1JbyK9xXztnC_9KMSvWcXTegpqxDu2hBV&export=download"
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
