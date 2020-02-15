import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isArr, isNonEmptyStr } from '../../utils';

export type ColProps = {
  children: React.ReactNode,
  widths?: [string] | null,
  orders?: [number | string] | null,
  className?: string | null,
  [key: string]: any
};

const Col = (props: ColProps) => {
  const { children, widths, orders, className, ...restProps } = props;
  const hasWidths: boolean = isArr(widths);
  const hasOrders: boolean = isArr(orders);
  const colClasses = {
    col: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  };

  if (hasWidths) {
    // @ts-ignore
    widths.forEach((w) => {
      colClasses[`col--${w}`] = true;
    });
  }

  if (hasOrders) {
    // @ts-ignore
    orders.forEach((order) => {
      colClasses[`order--${order}`] = true;
    });
  }

  const colClassName: string = classNames(colClasses);

  return (
    <div
      {...restProps}
      className={colClassName}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  widths: PropTypes.arrayOf(
    PropTypes.oneOf([
      'sm-1', 'sm-2', 'sm-3', 'sm-4', 'sm-5', 'sm-6', 'sm-7', 'sm-8', 'sm-9', 'sm-10', 'sm-11', 'sm-12',
      'md-1', 'md-2', 'md-3', 'md-4', 'md-5', 'md-6', 'md-7', 'md-8', 'md-9', 'md-10', 'md-11', 'md-12',
      'lg-1', 'lg-2', 'lg-3', 'lg-4', 'lg-5', 'lg-6', 'lg-7', 'lg-8', 'lg-9', 'lg-10', 'lg-11', 'lg-12',
      'xl-1', 'xl-2', 'xl-3', 'xl-4', 'xl-5', 'xl-6', 'xl-7', 'xl-8', 'xl-9', 'xl-10', 'xl-11', 'xl-12'
    ])
  ),
  orders: PropTypes.arrayOf(
    PropTypes.oneOf([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      'sm-0', 'sm-1', 'sm-2', 'sm-3', 'sm-4', 'sm-5', 'sm-6', 'sm-7', 'sm-8', 'sm-9', 'sm-10', 'sm-11',
      'md-0', 'md-1', 'md-2', 'md-3', 'md-4', 'md-5', 'md-6', 'md-7', 'md-8', 'md-9', 'md-10', 'md-11',
      'lg-0', 'lg-1', 'lg-2', 'lg-3', 'lg-4', 'lg-5', 'lg-6', 'lg-7', 'lg-8', 'lg-9', 'lg-10', 'lg-11',
      'xl-0', 'xl-1', 'xl-2', 'xl-3', 'xl-4', 'xl-5', 'xl-6', 'xl-7', 'xl-8', 'xl-9', 'xl-10', 'xl-11'
    ])
  ),
  className: PropTypes.string
};

Col.defaultProps = {
  widths: null,
  orders: null,
  className: null
};

export default Col;
