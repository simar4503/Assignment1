import React from "react";
import styles from "./Hero.module.css";
import profileImage from "./panda.jpg"; // Assuming you add the image in the assets folder

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Hello, I'm Simran Kaur</h1>
        <p>Web Developer | Designer | Freelancer</p>
        <a href="#portfolio" className={styles.btn}>View My Work</a>
      </div>
      <div className={styles.heroImage}>
        <img src={profileImage} alt="Simran Kaur" />
      </div>
    </section>
  );
};

export default Hero;
