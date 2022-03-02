import React from 'react';
import styles from './Loading.module.css';
import loading from '../assets/spinner.gif';

const Loading = () => (
  <div className={styles.loadingParent}>
    <div className={styles.loadingCard}>
      <img src={loading} alt="Loading..." />
      <p>Loading Weather...</p>
      <p className={styles.hiddenMsg}>Almost there...</p>
    </div>
  </div>
);

export default Loading;
