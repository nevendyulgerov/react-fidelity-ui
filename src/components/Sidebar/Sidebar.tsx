import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type SidebarProps = {
  children: React.ReactNode,
  className?: string | null
};

const Sidebar = (props: SidebarProps) => {
  const { children, className } = props;
  const componentClassName = classNames({
    sidebar: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div className={componentClassName}>
      <div className="sidebar__body">
        {children}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

Sidebar.defaultProps = {
  className: null
};

export default Sidebar;
