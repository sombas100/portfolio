import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Corey</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React & NodeJS. Reach out if you
          would like to learn more!
        </p>
        <a href="/assets/CV.pdf" download className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("portfolio5.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
