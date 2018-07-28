import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => (
  <div
    data-component="loader"
    className={`${isLoading ? 'active' : ''}`}
  >
    <div className="spinner">
      {/* Loader */}
    </div>
  </div>
);

Loader.propTypes = {
  isLoading: PropTypes.bool
};

Loader.defaultProps = {
  isLoading: false
};

export default Loader;
