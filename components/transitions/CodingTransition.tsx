import React from "react";
import styles from "../../styles/transitions.module.css";

export default function CodingTransition({ id }) {
  console.log("CodingTransition rendered"); // Add this line
  return (
    <div id={id} className={`${styles.subContainer} ${styles.coding}`}>
      console.log("CodingTransition rendered"); // Add this line
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt2}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
    </div>
  );
}
