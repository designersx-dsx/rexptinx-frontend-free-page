import React from 'react';
import styles from './FreeUser/FreeUser.module.css';
const FullPageLoader = () => (
  <div className={styles.backdrop} aria-busy="true" aria-live="polite">
    <div className={styles.wrap}>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
    </div>
  </div>
);

export default FullPageLoader;
