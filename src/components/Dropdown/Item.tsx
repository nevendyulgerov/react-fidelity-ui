import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type DropdownItemProps = {
  children: React.ReactNode,
  className?: string | null,
  active?: boolean | false,
  [key: string]: any
};

const DropdownItem = (props: DropdownItemProps) => {
  const { children, className, active, ...restProps } = props;

  const componentClassName = classNames({
    dropdown__item: true,
    'dropdown__item--active': active,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      role="option"
      aria-selected={active}
      {...restProps}
      className={componentClassName}
    >
      {children}
    </div>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  active: PropTypes.bool
};

DropdownItem.defaultProps = {
  className: null,
  active: false
};

export default DropdownItem;
