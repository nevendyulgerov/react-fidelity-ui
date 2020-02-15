import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../utils';

export type BadgeProps = {
  children?: React.ReactNode | null,
  type?: string,
  size?: string | null,
  className?: string | null,
  loading?: boolean,
  squared?: boolean,
  rounded?: boolean,
  fab?: boolean,
  outlined?: boolean,
  [key: string]: any
};

const Badge = (props: BadgeProps) => {
  const { children, type, size, className, loading, squared, rounded, fab, outlined, ...restProps } = props;
  const componentClassName: string = classNames({
    badge: true,
    [`badge--${type}`]: true,
    'badge--loading': loading,
    'badge--squared': squared || fab,
    'badge--rounded': rounded,
    'badge--outlined': outlined,
    'badge--fab': fab,
    [`badge--${size}`]: isNonEmptyStr(size),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <span
      {...restProps}
      className={componentClassName}
    >
      <span className="badge__letter">
        {children}
      </span>
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  type: PropTypes.oneOf([
    'text',
    'primary',
    'secondary',
    'success',
    'info',
    'danger',
    'warning'
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  className: PropTypes.string,
  loading: PropTypes.bool,
  squared: PropTypes.bool,
  rounded: PropTypes.bool,
  fab: PropTypes.bool,
  outlined: PropTypes.bool
};

Badge.defaultProps = {
  children: null,
  type: 'secondary',
  size: 'sm',
  className: null,
  loading: false,
  squared: false,
  rounded: true,
  fab: false,
  outlined: false
};

export default Badge;
