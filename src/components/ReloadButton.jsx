import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import styles from './ReloadButton.module.css';

const ReloadButton = ({ onClick }) => (
  <div className={styles.reloadButtonParent}>
    <Button
      color="warning"
      variant="contained"
      startIcon={<FontAwesomeIcon icon={faLocationArrow} />}
      onClick={onClick}
      className={styles.reloadButtonButton}
    >
      My Location
    </Button>
  </div>
);

ReloadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ReloadButton;
