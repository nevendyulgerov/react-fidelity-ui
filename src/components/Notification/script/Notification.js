import React from 'react';
import Icon from '../../Icon/';

const Notification = ({ type = 'info', text = '', title = '', icon = 'notification' }) => (
  <div
    title={title !== '' ? title : text}
    data-component="notification"
    data-notification={type}
  >
    <Icon name={icon} />
    <span className="text">
      {text}
    </span>
  </div>
);

export default Notification;
