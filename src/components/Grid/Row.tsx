import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type RowProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
};

const Row = (props: RowProps) => {
  const { children, className, ...restProps } = props;
  const componentClassName: string = classNames({
    row: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

Row.defaultProps = {
  className: null
};

export default Row;
