import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type DropdownDividerProps = {
  className?: string | null,
  [key: string]: any
}

const DropdownDivider = (props: DropdownDividerProps) => {
  const { className, ...restProps } = props;
  const componentClassName: string = classNames({
    dropdown__divider: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
    />
  );
};

DropdownDivider.propTypes = {
  className: PropTypes.string
};

DropdownDivider.defaultProps = {
  className: null
};

export default DropdownDivider;
