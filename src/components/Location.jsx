import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ name, temperature, description, icon }) =>
  !temperature ? (
    <div>Enter a city</div>
  ) : (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>{name}</p>
      <p>{Math.round(temperature)}&#176; F</p>
      <p>{description}</p>
    </div>
  );

Location.propTypes = {
  name: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Location;
