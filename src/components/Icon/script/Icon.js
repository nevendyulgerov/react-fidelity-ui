import React from 'react';

const Icon = ({ name = 'comment', className = '', title = '' }) => (
  <div className={`component ${className}`} data-component="icon" title={title}>
    <svg className="icon component-icon">
      <use xlinkHref={`./src/icons/icon-sprite.svg#icon-${name}`}>
        {/* icon is populated here */}
      </use>
    </svg>
  </div>
);

export default Icon;
