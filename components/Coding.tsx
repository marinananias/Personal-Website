import React from "react";
import styles from "../styles/coding.module.css";
import utils from "../styles/utils.module.css";
import Cards from "./Cards";
import CardsGrid from "./CardsGrid";

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
      <div className={styles.projects}>
        <CardsGrid>
          <Cards
            title="MIDI Songwriter"
            image="/images/MIDISong.jpg"
            link="https://github.com/marinananias/MIDI-Songwriter-Prototype"
            section="coding"
          />
          <Cards
            title="MIDI Keyboard"
            image="/images/MIDIKey.png"
            link="https://github.com/marinananias/MIDI-Keyboard"
            section="coding"
          />
          <Cards
            title="This Website"
            image="https://example.com"
            link="https://example.com"
            section="coding"
          />
        </CardsGrid>
      </div>
    </section>
  );
}
