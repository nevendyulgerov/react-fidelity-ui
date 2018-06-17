import React from 'react';
import Icon from '../../Icon';

const Notification = ({ type = 'info', text = '', title = '' }) => (
  <div
    title={title !== '' ? title : text}
    data-component="notification"
    data-notification={type}
  >
    <Icon name="notification" />
    <span className="text">
      {text}
    </span>
  </div>
);

export default Notification;
