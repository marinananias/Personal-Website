import React from "react";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import utils from "../styles/utils.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`${utils.subContainers} ${styles.subContainer}`}
    >
      <div className={styles.titleBox}>
        <h2 className={styles.title1}>LET'S</h2>
        <h2 className={styles.title2}>CONTACT ME</h2>
        <h2 className={styles.title3}>JAM!</h2>
      </div>
    </section>
  );
}
