import React from "react";
import utils from "../../styles/utils.module.css";
import styles from "../../styles/transitions/tContact.module.css";
import { motion } from "framer-motion";

export default function ContactTransition({ id }) {
  return (
    <div id={id} className={`${utils.transitionsSubContain} ${styles.contact}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={styles.contactTxt1}>CONTACT ME</h2>
        <h2 className={styles.contactTxt1}>CONTACT ME</h2>
        <h2 className={styles.contactTxt2}>CONTACT ME</h2>
        <h2 className={styles.contactTxt1}>CONTACT ME</h2>
        <h2 className={styles.contactTxt1}>CONTACT ME</h2>
        <h2 className={styles.contactTxt2}>CONTACT ME</h2>
        <h2 className={styles.contactTxt1}>CONTACT ME</h2>
        <h2 className={styles.contactTxt1}>CONTACT ME</h2>
        <h2 className={styles.contactTxt2}>CONTACT ME</h2>
        <h2 className={styles.contactTxt1}>CONTACT ME</h2>
        <h2 className={styles.contactTxt1}>CONTACT ME</h2>
      </motion.div>
    </div>
  );
}
