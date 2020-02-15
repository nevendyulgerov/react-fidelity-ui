import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type TabsItemProps = {
  children: React.ReactNode,
  className?: string | null,
  active?: boolean
}

const Tab = (props: TabsItemProps) => {
  const { children, className, active } = props;
  const componentClassName = classNames({
    tabs__item: true,
    'tabs__item--active': active,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <li className={componentClassName}>
      {children}
    </li>
  );
};

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  active: PropTypes.bool
};

Tab.defaultProps = {
  className: null,
  active: false
};

export default Tab;
