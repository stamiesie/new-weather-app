import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.headerParent}>
    <h1 className={styles.headerFont}>Weather Getter</h1>
  </div>
);

export default Header;
