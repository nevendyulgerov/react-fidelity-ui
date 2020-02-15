import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type NavMenuItemProps = {
  children: React.ReactNode,
  className?: string | null,
  active?: boolean,
  home?: boolean
}

const NavMenuItem = ({ children, className, active, home }: NavMenuItemProps) => {
  const componentClassName = classNames({
    navigation__item: true,
    'navigation__item--active': active,
    'navigation__item--home': home,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <li className={componentClassName}>
      {children}
    </li>
  );
};

NavMenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
  home: PropTypes.bool
};

NavMenuItem.defaultProps = {
  className: null,
  active: false,
  home: false
};

export default NavMenuItem;
