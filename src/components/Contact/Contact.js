import React from "react";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contactContainer}>
      <h1 className={classes.contactH1}>CONTACT</h1>
      <h3>
        I am available for an immediate start and open to any ideas of
        cooperation and to learn new things
      </h3>

      <ul className={classes.unorderedList}>
        <li>
          E-mail:
          <a href="mailto: patryk.nowak@gmail.com">patryk.nowak@gmail.com</a>
        </li>
        <li>
          LinkedIn:
          <a
            className={classes.links}
            href="https://www.linkedin.com/in/patryknowak1990/"
          >
            patryknowak1990
          </a>
        </li>
        <li>
          GitHub:
          <a className={classes.links} href="https://github.com/Pat-On">
            Pat-On
          </a>
        </li>
        <li>
          LeetCode:
          <a className={classes.links} href="https://leetcode.com/Pat-On/">
            Pat-On
          </a>
        </li>
      </ul>

      {/* <p>google map or something like that pointing Birmingham</p> */}
    </div>
  );
};

export default Contact;
