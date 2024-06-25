import React from "react";
import Image from "next/image";
import styles from "../styles/landing.module.css";

export default function Landing() {
  return (
    <section id="landing" className={styles.subContainer}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/logoShw.svg"
          alt="Shadowed Logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      </div>
      <div className={styles.greetings}>
        <h3 className={styles.greet1}>Oi!</h3>
        <h3 className={styles.greet2}>(Hello!)</h3>
        <h3 className={styles.name}>I'm Marina</h3>
      </div>
      <div className={styles.recordPlayer}>
        <Image
          src="/images/vBase.svg"
          alt="Record Player Base"
          width={300}
          height={300}
          priority={true}
          className={styles.vinylBase}
        />
        <Image
          src="/images/vinyl.svg"
          alt="Vinyl CD"
          width={300}
          height={300}
          className={styles.vinyl}
        />
        <Image
          src="/images/vNeedle.png"
          alt="Vinyl Needle"
          width={300}
          height={300}
          className={styles.vinylNeedle}
        />
      </div>
    </section>
  );
}
