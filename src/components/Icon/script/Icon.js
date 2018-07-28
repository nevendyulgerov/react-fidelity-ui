import React from 'react';
import PropTypes from 'prop-types';
import '../../../icons/icon-sprite.svg';

const Icon = ({ name, className, title }) => (
  <div
    data-component="icon"
    className={`component ${className}`}
    title={title}
  >
    <svg className="icon component-icon">
      <use xlinkHref={`#icon-sprite_icon-${name}`}>
        {/* icon is populated here */}
      </use>
    </svg>
  </div>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string
};

Icon.defaultProps = {
  className: '',
  title: ''
};

export default Icon;
