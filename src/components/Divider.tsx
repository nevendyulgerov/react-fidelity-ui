import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../utils';

export type DividerProps = {
  children?: React.ReactNode | string | null,
  size?: string | null,
  className?: string | null,
  [key: string]: any
}

const Divider = (props: DividerProps) => {
  const { children, size, className, ...restProps } = props;
  const componentClassName: string = classNames({
    divider: true,
    [`divider--${size}`]: isNonEmptyStr(size),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
    >
      <span className="divider__text">
        {children}
      </span>
    </div>
  );
};

Divider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  size: PropTypes.oneOf([null, 'sm', 'lg']),
  className: PropTypes.string
};

Divider.defaultProps = {
  children: null,
  size: null,
  className: null
};

export default Divider;
