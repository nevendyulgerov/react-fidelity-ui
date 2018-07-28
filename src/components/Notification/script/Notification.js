import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon/';

const Notification = ({ type, note, title, icon }) => (
  <div
    data-component="notification"
    data-notification={type}
    title={title !== '' ? title : title}
  >
    <Icon name={icon} />
    <span className="text">
      {note}
    </span>
  </div>
);

Notification.propTypes = {
  type: PropTypes.string,
  note: PropTypes.string.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string
};

Notification.defaultProps = {
  type: 'info',
  title: '',
  icon: 'notification'
};

export default Notification;
