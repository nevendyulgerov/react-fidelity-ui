import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type NavMenuProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
}

const NavMenu = ({ children, className, ...restProps }: NavMenuProps) => {
  const componentClassName = classNames({
    navigation__menu: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <ul
      {...restProps}
      className={componentClassName}
    >
      {children}
    </ul>
  );
};

NavMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

NavMenu.defaultProps = {
  className: null
};

export default NavMenu;
