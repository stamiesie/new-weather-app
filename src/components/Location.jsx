import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Location.module.css';

const Location = ({ town, temperature, description, icon }) => (
  <div className={styles.locationParent}>
    <div className={styles.locationCard}>
      <p>
        {moment().format('dddd')} {moment().format('LL')}
      </p>
      <img
        className={styles.icon}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>Currently in {town}</p>
      <p>{description}</p>
      <p>{Math.round(temperature)}&#176; F</p>
    </div>
  </div>
);

Location.propTypes = {
  town: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Location;
