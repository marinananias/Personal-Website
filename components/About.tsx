import React from "react";
import Image from "next/image";
import styles from "../styles/about.module.css";
import utils from "../styles/utils.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={`${utils.subContainers} ${styles.subContainer}`}
    >
      <h2 className={`${utils.tit} ${styles.titAbt}`}>About Me</h2>
      <div className={styles.abtContent}>
        <Image
          src="/images/profile.jpg"
          sizes="100vw"
          style={{
            width: "40%",
            height: "auto",
            borderRadius: "0.5rem",
          }}
          width={500}
          height={300}
          alt="Marina Ananias"
        />
        <div className={styles.txtButton}>
          <p> Text PlaceHolder </p>
          <button> Button </button>
        </div>
      </div>
    </section>
  );
}
