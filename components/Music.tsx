import React from "react";
import CardsGrid from "./CardsGrid";
import styles from "../styles/music.module.css";
import utils from "../styles/utils.module.css";
import Cards from "./Cards";

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
      <div className={styles.projects}>
        <CardsGrid>
          <Cards
            title="Broken Smile"
            image="/images/broken-smile.png"
            link="https://github.com/marinananias/MIDI-Songwriter-Prototype"
            section="music"
          />
          <Cards
            title="Expectations"
            image="/images/expectations.png"
            link="https://github.com/marinananias/MIDI-Keyboard"
            section="music"
          />
          <Cards
            title="Luz"
            image="/images/luz.png"
            link="https://github.com/marinananias/MIDI-Keyboard"
            section="music"
          />
        </CardsGrid>
      </div>
    </section>
  );
}
