import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type DropdownBodyProps = {
  children: React.ReactNode,
  size?: string | 'auto',
  className?: string | null,
  active?: boolean | false,
  [key: string]: any
};

const sizes = ['auto', 'xs', 'sm', 'md', 'lg', 'xl'];

const DropdownBody = (props: DropdownBodyProps) => {
  const { children, size, className, active, ...restProps } = props;
  const componentClassName: string = classNames({
    dropdown__body: true,
    'dropdown__body--active': active,
    // @ts-ignore
    [`dropdown__body--size-${size}`]: DropdownBody.sizes.includes(size),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      aria-expanded={active}
      {...restProps}
      className={componentClassName}
    >
      {children}
    </div>
  );
};

DropdownBody.sizes = sizes;

DropdownBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  size: PropTypes.oneOf(sizes),
  className: PropTypes.string,
  active: PropTypes.bool
};

DropdownBody.defaultProps = {
  size: 'auto',
  className: null,
  active: false
};

export default DropdownBody;
