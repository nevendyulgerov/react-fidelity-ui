import React from 'react';
import '../../../icons/icon-sprite.svg';

const Icon = ({ name = 'comment', className = '', title = '' }) => (
  <div className={`component ${className}`} data-component="icon" title={title}>
    <svg className="icon component-icon">
      <use xlinkHref={`#icon-sprite_icon-${name}`}>
        {/* icon is populated here */}
      </use>
    </svg>
  </div>
);

export default Icon;
