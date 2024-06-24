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
      {/* <CardsGrid></CardsGrid> */}
    </section>
  );
}
