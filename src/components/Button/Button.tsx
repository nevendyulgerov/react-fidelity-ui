import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ButtonProps = {
  children: React.ReactNode,
  type?: string,
  className?: string | null,
  active?: boolean,
  loading?: boolean,
  outlined?: boolean,
  expanded?: boolean,
  rounded?: boolean,
  fab?: boolean,
  bordered?: boolean,
  flat?: boolean,
  hovered?: boolean,
  dashed?: boolean,
  squared?: boolean,
  [key: string]: any
};

const Button = (props: ButtonProps) => {
  const { children, type, size, className, active, loading, outlined, expanded, rounded, fab, bordered, flat, hovered, dashed, squared, ...restProps } = props;
  const componentClassName: string = classNames({
    btn: true,
    [`btn--${type}`]: true,
    'btn--active': active,
    'btn--loading': loading,
    'btn--outlined': outlined,
    'btn--expanded': expanded,
    'btn--rounded': rounded,
    'btn--fab': fab,
    'btn--no-border': !bordered,
    'btn--flat': flat,
    'btn--hovered': hovered,
    'btn--dashed': dashed,
    'btn--squared': squared || fab,
    [`btn--${size}`]: isNonEmptyStr(size),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <button
      {...restProps}
      className={componentClassName}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  type: PropTypes.oneOf([
    'link',
    'text',
    'icon',
    'primary',
    'secondary',
    'success',
    'info',
    'danger',
    'warning',
    'facebook',
    'google'
  ]),
  size: PropTypes.oneOf([null, 'sm', 'lg']),
  className: PropTypes.string,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  outlined: PropTypes.bool,
  expanded: PropTypes.bool,
  rounded: PropTypes.bool,
  fab: PropTypes.bool,
  bordered: PropTypes.bool,
  flat: PropTypes.bool,
  hovered: PropTypes.bool,
  dashed: PropTypes.bool,
  squared: PropTypes.bool
};

Button.defaultProps = {
  type: 'secondary',
  size: null,
  className: null,
  active: false,
  loading: false,
  outlined: false,
  expanded: false,
  rounded: false,
  fab: false,
  bordered: true,
  flat: true,
  hovered: false,
  dashed: false,
  squared: false
};

export default Button;
