import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import resume from "../../images/resume.pdf";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Corey</h1>
        <p className={styles.description}>
          As a fullstack developer, my expertise lies in creating seamless and
          intuitive user experiences. I specialize in using cutting edge
          technologies to produce high-quality websites and applications .
          Specifically I have vast knowledge of ReactJS and NodeJS, which allow
          me to build complex and dynamic applications with ease.
        </p>
        <a href={resume} download="Resume" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("portfolio17.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
