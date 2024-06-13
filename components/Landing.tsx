import React from 'react';
import styles from '../styles/landing.module.css';

export default function Landing() {
  return (
    <section id="landing" className={styles.landing}>
      <div className={styles.greetings}>
        <h3 className={styles.greet1}>Oi!</h3>
        <h3 className={styles.greet2}>(Hello!)</h3>
        <h3 className={styles.name}>I'm Marina</h3>
      </div>
    </section>
  );
}
