import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Reach out to me through these links. Lets connect!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            href="mailto:sombas100@yahoo.com"
            src={getImageUrl("emailIcon.png")}
            alt="Email Icon"
          />
          <a href="mailto:sombas100@yahoo.com">sombas100@yahoo.com</a>
        </li>
        <li className={styles.link}>
          <img
            href="https://www.linkedin.com/in/corey-clarke100/"
            src={getImageUrl("linkedinIcon.png")}
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/corey-clarke100/">
            Linkedin.com/corey-clarke100
          </a>
        </li>
        <li className={styles.link}>
          <img
            href="https://github.com/sombas100"
            src={getImageUrl("githubIcon.png")}
            alt="Github Icon"
          />
          <a href="https://github.com/sombas100">github.com/sombas100</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
