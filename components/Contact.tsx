import React from 'react';
import Image from 'next/image';
import styles from '../styles/contact.module.css';
import utils from '../styles/utils.module.css';

export default function Contact() {
  return (
    <section id="contact" className={utils.subContainers}>
      <h2 className={`${utils.tit} ${styles.titContact}`}>Contact Me</h2>
      <Image
        src="/images/logo.png"
        sizes="100vw"
        style={{
          width: '35%',
          height: 'auto',
          marginTop: -10,
          opacity: 0.4
        }}
        width={500}
        height={300}
        alt="Logo"
      />
    </section>
  );
};