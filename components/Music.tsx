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
      <h2 className={`${utils.tit} ${styles.titMusic}`}>Making Music</h2>
      <div className={styles.musicContent}>
        <CardsGrid n={1} />
        {/* projects + skils */}
      </div>
    </section>
  );
}
