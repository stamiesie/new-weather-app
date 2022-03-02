import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.headerParent}>
    <p className={styles.headerFont}>Weather Getter</p>
  </div>
);

export default Header;
