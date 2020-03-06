import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../utils';

export type CollapseProps = {
  children: React.ReactNode,
  className?: string | null,
  active?: boolean,
  [key: string]: any
};

const Collapse = (props: CollapseProps) => {
  const { children, className, active, ...restProps } = props;
  const componentClassName: string = classNames({
    collapse: true,
    'collapse--active': active,
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

Collapse.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  active: PropTypes.bool
};

Collapse.defaultProps = {
  className: null,
  active: false
};

export default Collapse;
