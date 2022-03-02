import React from 'react';
import Weather from '../containers/Weather';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.App}>
      <Weather />
    </div>
  );
}
