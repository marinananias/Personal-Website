import React from "react";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import utils from "../styles/utils.module.css";
import LinkedIn from "./icons/LinkedIn";
import GitHub from "./icons/GitHub";
import SoundCloud from "./icons/SoundCloud";

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
      <div className={styles.discoContainer}>
        <Image
          src="/images/disco.png"
          alt="Disco Globe"
          width={160}
          height={150}
          priority={true}
          className={styles.disco}
        />
      </div>
      <div className={styles.socBox}>
        <div className={styles.socIcons}>
          <a href="https://www.linkedin.com/in/marinaananias/" role="button">
            <LinkedIn fill={"#FFF7F4"} />
          </a>
          <a href="https://github.com/marinananias" role="button">
            <GitHub fill={"#FFF7F4"} />
          </a>
          <a
            href="https://soundcloud.com/marina-ananias-806391428?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            role="button"
          >
            <SoundCloud fill={"#FFF7F4"} />
          </a>
        </div>
        <a href="mailto:ananias.marina@gmail.com" title="email">
          <p>ananias.marina@gmail.com</p>
        </a>
      </div>
      <div className={styles.txtBox}>
        <p className={styles.txt}>I WOULD LOVE TO</p>
        <p className={styles.txt}>
          <u>HEAR</u> FROM YOU
        </p>
      </div>
    </section>
  );
}
