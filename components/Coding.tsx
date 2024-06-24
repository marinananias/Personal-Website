import React from "react";
import CardsGrid from "./CardsGrid";
import styles from "../styles/coding.module.css";
import utils from "../styles/utils.module.css";

export default function Coding() {
  return (
    <section
      id="coding"
      className={`${utils.subContainers} ${styles.subContainer}`}
    >
      <h2 className={styles.title}>CODING</h2>
      <div className={styles.skills}>
        <div className={styles.skillsCol}>
          <p>C</p>
          <p>C++</p>
          <p>Python</p>
        </div>
        <div className={styles.skillsCol}>
          <p>Java</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
        </div>
        <div className={styles.skillsCol}>
          <p>CSS</p>
          <p>HTML</p>
        </div>
      </div>
      {/* <CardsGrid></CardsGrid> */}
    </section>
  );
}
