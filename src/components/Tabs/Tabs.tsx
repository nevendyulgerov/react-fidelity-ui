import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type TabsProps = {
  children: React.ReactNode,
  className?: string | null,
  align?: string,
  basic?: boolean,
  bordered?: boolean
}

const Tabs = (props: TabsProps) => {
  const { children, className, align, basic, bordered } = props;
  const componentClassName = classNames({
    tabs: true,
    'tabs--basic': basic,
    'tabs--border': bordered,
    [`tabs--${align}`]: align !== 'left',
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <ul className={componentClassName}>
      {children}
    </ul>
  );
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  basic: PropTypes.bool,
  bordered: PropTypes.bool
};

Tabs.defaultProps = {
  className: null,
  align: 'left',
  basic: false,
  bordered: false
};

export default Tabs;
