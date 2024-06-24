import React from "react";
import CardsGrid from "./CardsGrid";
import styles from "../styles/music.module.css";
import utils from "../styles/utils.module.css";

export default function Music() {
  return (
    <section
      id="music"
      className={`${utils.subContainers} ${styles.subContainer}`}
    >
      <div className={styles.titleBox}>
        <h2 className={styles.title1}>Making</h2>
        <h2 className={styles.title2}>MUSIC</h2>
      </div>
    </section>
  );
}
