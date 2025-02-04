import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const projects = ["Java Project", "Database Project", "Python Project", "Networking Project"];

  return (
    <section id="portfolio" className={styles.portfolioGrid}>
      {projects.map((project, index) => (
        <div key={index} className={styles.portfolioItem}>{project}</div>
      ))}
    </section>
  );
};

export default Portfolio;
