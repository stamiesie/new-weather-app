import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Location = ({ town, temperature, description, icon }) => (
  <div>
    <img
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={description}
    />
    <p>{town}</p>
    <p>{Math.round(temperature)}&#176; F</p>
    <p>{description}</p>
    <p>{moment().format('dddd')}</p>
    <p>{moment().format('LL')}</p>
  </div>
);

Location.propTypes = {
  town: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Location;
