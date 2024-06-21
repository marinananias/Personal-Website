import React from 'react';
import CardsGrid from './CardsGrid';
import styles from '../styles/coding.module.css';
import utils from '../styles/utils.module.css';

export default function Coding () {
  return (
    <section id="coding" className={utils.subContainers}>
      <h2 className={`${utils.tit} ${styles.titCoding}`}>Coding</h2>
      <div className={styles.codeContent}>
        <CardsGrid n={1} />
        {/* projects + skils */}
      </div>
    </section>
  );
};