import React from 'react';

const icons = [
  'add',
  'comment',
  'dropdown',
  'filter',
  'grid',
  'more',
  'next',
  'notification',
  'previous',
  'remove',
  'search',
  'settings',
  'stats',
  'summary',
  'thumbs-down',
  'thumbs-up',
  'tick'
];

const Icon = ({ name, className = '' }) => {

  return (
    <div className={`component ${className}`} data-component="icon">
      <svg className="icon component-icon">
        <use xlinkHref={`./src/icons/icon-sprite.svg#icon-${name}`}>
          {/* icon is populated here */}
        </use>
      </svg>
    </div>
  )
};

export default Icon;
