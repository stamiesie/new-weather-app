import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ name, temp, description, icon }) => (
  <div>
    <img src={icon} alt={description} />
    <p>{name}</p>
    <p>{temp}</p>
    <p>{description}</p>
  </div>
);

Location.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Location;
