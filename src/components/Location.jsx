import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ name, temperature, description, icon }) => (
    <div>
        {/* <img src={icon} alt={description} /> */}
        <p>{name}</p>
        <p>{temperature}</p>
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