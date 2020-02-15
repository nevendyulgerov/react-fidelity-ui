import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr, isObj } from '../utils';

export type NotificationProps = {
  children: React.ReactNode,
  type?: string,
  icon?: React.ReactNode | null,
  className?: string | null,
  bordered?: boolean,
  hovered?: boolean,
  rounded?: boolean,
  elevated?: boolean,
  prependIcon?: boolean,
  [key: string]: any
};

const Notification = (props: NotificationProps) => {
  const { children, type, icon, className, bordered, hovered, rounded, elevated, prependIcon, ...restProps } = props;
  const hasIcon: boolean = isObj(icon);
  const componentClassName: string = classNames({
    notification: true,
    'notification--append-icon': !prependIcon,
    'notification--bordered': bordered,
    'notification--hovered': hovered,
    'notification--rounded': rounded,
    'notification--elevated': elevated,
    [`notification--${type}`]: isNonEmptyStr(type),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
    >
      {hasIcon && (
        <div className="notification__icon">
          {icon}
        </div>
      )}

      <div className="notification__message">
        {children}
      </div>
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'warning',
    'success',
    'danger'
  ]),
  icon: PropTypes.node,
  className: PropTypes.string,
  bordered: PropTypes.bool,
  hovered: PropTypes.bool,
  rounded: PropTypes.bool,
  elevated: PropTypes.bool,
  prependIcon: PropTypes.bool
};

Notification.defaultProps = {
  type: 'info',
  icon: null,
  className: null,
  bordered: true,
  hovered: false,
  rounded: true,
  elevated: false,
  prependIcon: true
};

export default Notification;
