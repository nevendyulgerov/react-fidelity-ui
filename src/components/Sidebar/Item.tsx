import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type SidebarItemProps = {
  className?: string | null,
  active?: boolean,
  renderItem: (className: string) => React.ReactNode
};

const SidebarItem = (props: SidebarItemProps) => {
  const { className, active, renderItem } = props;

  const componentClassName = classNames({
    sidebar__item: true,
    'sidebar__item--active': active,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return renderItem(componentClassName);
};

SidebarItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  renderItem: PropTypes.func.isRequired
};

SidebarItem.defaultProps = {
  className: null,
  active: false,
  renderItem: () => {}
};

export default SidebarItem;
