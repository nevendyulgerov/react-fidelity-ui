import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../utils';

export type AnimationProps = {
  children: React.ReactNode,
  type?: string | null,
  className?: string | null,
  [key: string]: any
};

const Transition = (props: AnimationProps) => {
  const { children, type, className, ...restProps } = props;
  const componentClassName: string = classNames({
    transition: true,
    // @ts-ignore
    [`transition--${type}`]: isNonEmptyStr(type),
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

Transition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  type: PropTypes.oneOf([
    'fade',
    'fade-in-down',
    'fade-in-left',
    'fade-in-right',
    'fade-in-up',
    'fade-out',
    'slide-in-down',
    'slide-in-left',
    'slide-in-right',
    'slide-in-up',
    'slide-out-down',
    'slide-out-left',
    'slide-out-right',
    'slide-out-up',
    'spin'
  ]),
  className: PropTypes.string
};

Transition.defaultProps = {
  type: 'fade',
  className: null
};

export default Transition;
