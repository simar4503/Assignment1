import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section className={styles.skills}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillCard}>{skill}</div>
      ))}
    </section>
  );
};

export default Skills;
