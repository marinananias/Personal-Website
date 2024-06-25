import React from "react";
import Image from "next/image";
import styles from "../styles/about.module.css";
import utils from "../styles/utils.module.css";

export default function About({ id }) {
  return (
    <section
      id={id}
      className={`${utils.subContainers} ${styles.subContainer}`}
    >
      <div className={styles.txt}>
        <p>
          Originally from Maceió-AL, Brazil, I'm currently pursuing a Bachelor's
          degree in{" "}
          <span style={{ color: "#EC297B" }}>
            Computer Science and Music with a minor in Neuroscience{" "}
          </span>{" "}
          at Grinnell College, Iowa. I'm fascinated by the intersection of these
          fields and passionate about exploring interdisciplinary projects that
          leverage the connections between them.
        </p>
        <br />
        <p>
          With every note played and code written, I embrace the pursuit of
          knowledge, the joy of artistic expression, and the exploration of the
          human mind. The people around me, alongside
          <span style={{ color: "#EC297B" }}>
            {" "}
            courage, curiosity, and creativity
          </span>
          , are the main instruments that accompany me.
        </p>
        <br />
        <p>
          I love to hang out with my family and friends, embark on intergalactic
          adventures in the Star Wars universe, sing Mamma Mia songs in the
          shower, unravel mysteries with Shawn and Gus in Psych, and conquer
          shrines in Zelda.
        </p>
      </div>
      <div className={styles.button} role="button">
        Resume
      </div>
      <div className={styles.titlePhoto}>
        <div className={styles.titleBox}>
          <div className={styles.title1}>
            <h2>Abt.</h2>
          </div>
          <div className={styles.title2}>
            <h2>Me</h2>
          </div>
        </div>
        <Image
          className={styles.photo}
          width={300}
          height={300}
          priority={true}
          alt="Marina Ananias"
          src="/images/profile.png"
        />
      </div>
    </section>
  );
}
