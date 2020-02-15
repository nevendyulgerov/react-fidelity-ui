import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type DropdownItemProps = {
  className?: string | null,
  active?: boolean,
  renderItem: (className: string) => React.ReactNode
};

const DropdownItem = (props: DropdownItemProps) => {
  const { className, active, renderItem } = props;

  const componentClassName = classNames({
    dropdown__item: true,
    'dropdown__item--active': active,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return renderItem(componentClassName);
};

DropdownItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  renderItem: PropTypes.func.isRequired
};

DropdownItem.defaultProps = {
  className: null,
  active: false,
  renderItem: () => {}
};

export default DropdownItem;
