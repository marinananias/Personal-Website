import React from "react";
import utils from "../../styles/utils.module.css";
import styles from "../../styles/transitions/tCoding.module.css";

export default function CodingTransition({ id }) {
  return (
    <div id={id} className={`${utils.transitionsSubContain} ${styles.coding}`}>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt2}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt2}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt2}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
      <h2 className={styles.codingTxt1}>CODING</h2>
    </div>
  );
}
