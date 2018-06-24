import React from 'react';
import Icon from '../../Icon/';

const Stat = ({ iconName = 'comment', count = 0 }) => (
  <div data-component="stat">
    <Icon name={iconName} />
    <span className="count">
      {count}
    </span>
  </div>
);

export default Stat;
