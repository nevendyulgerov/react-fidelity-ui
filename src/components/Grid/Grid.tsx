import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Row from './Row';
import Col from './Col';
import { isNonEmptyStr } from '../../utils';

export type GridProps = {
  children: React.ReactNode,
  className?: string | null,
  [key: string]: any
};

const Grid = (props: GridProps) => {
  const { children, className, ...restProps } = props;
  const componentClassName: string = classNames({
    grid: true,
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

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

Grid.defaultProps = {
  className: null
};

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
