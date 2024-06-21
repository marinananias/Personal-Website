import React from 'react';
import styles from '../styles/layout.module.css';

export const name = 'Marina Ananias';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* Header */}
      {children}
      <footer className={styles.ft} >
        <p>© Copyright 2024 Marina Ananias</p>
      </footer>
    </div>
  );
}