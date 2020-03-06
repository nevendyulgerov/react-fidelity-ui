import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ButtonGroupProps = {
  children: React.ReactNode,
  align?: string,
  className?: string | null,
  rounded?: boolean,
  wrapped?: boolean,
  stacked?: boolean,
  [key: string]: any
};

const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, align, className, rounded, wrapped, stacked, ...restProps } = props;
  const componentClassName: string = classNames({
    'btn-group': true,
    'btn-group--rounded': rounded,
    'btn-group--nowrap': !wrapped,
    'btn-group--stacked': stacked,
    [`btn-group--${align}`]: align !== 'left',
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      className={componentClassName}
      {...restProps}
    >
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  className: PropTypes.string,
  rounded: PropTypes.bool,
  wrapped: PropTypes.bool,
  stacked: PropTypes.bool
};

ButtonGroup.defaultProps = {
  align: 'left',
  className: null,
  rounded: false,
  wrapped: true,
  stacked: false
};

export default ButtonGroup;
