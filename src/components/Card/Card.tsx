import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isStr, isNonEmptyStr } from '../../utils';

export type CardProps = {
  children: React.ReactNode,
  paddingSize: string | null,
  className?: string | null,
  hovered?: boolean,
  padded?: boolean,
  loading?: boolean,
  bordered?: boolean,
  flat?: boolean,
  rounded?: boolean,
  [key: string]: any
};

const Card = (props: CardProps) => {
  const { children, paddingSize, className, hovered, padded, loading, bordered, flat, rounded, ...restProps } = props;
  const componentClassName: string = classNames({
    card: true,
    'card--padding': padded,
    'card--loading': loading,
    'card--hover': hovered,
    'card--bordered': bordered,
    'card--flat': flat,
    'card--rounded': rounded,
    [`card--padding-${paddingSize}`]: isStr(paddingSize),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  paddingSize: PropTypes.oneOf([
    null,
    'sm',
    'lg'
  ]),
  className: PropTypes.string,
  hovered: PropTypes.bool,
  padded: PropTypes.bool,
  loading: PropTypes.bool,
  bordered: PropTypes.bool,
  flat: PropTypes.bool,
  rounded: PropTypes.bool
};

Card.defaultProps = {
  paddingSize: null,
  className: null,
  hovered: false,
  padded: true,
  loading: false,
  bordered: true,
  flat: false,
  rounded: true
};

export default Card;
