import React from 'react';

const Loader = ({ isLoading = false }) => (
  <div
    data-component="loader"
    className={`${isLoading ? 'active' : ''}`}
  >
    <div className="spinner">
      {/* Loader */}
    </div>
  </div>
);

export default Loader;
