import React from 'react';
import PropTypes from 'prop-types';

const ReloadButton = ({ onClick }) => (
  <div>
    <button type="button" onClick={onClick}>
      Reload
    </button>
  </div>
);

ReloadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ReloadButton;
