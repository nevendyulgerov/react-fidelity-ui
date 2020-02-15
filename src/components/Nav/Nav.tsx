import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export type NavProps = {
  children: React.ReactNode,
  active?: boolean
}

const Nav = ({ children, active }: NavProps) => {
  const componentClassName = classNames({
    navigation: true,
    'navigation--active': active
  });

  return (
    <div className={componentClassName}>
      {children}
    </div>
  );
};

Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  active: PropTypes.bool
};

Nav.defaultProps = {
  active: false
};

export default Nav;
