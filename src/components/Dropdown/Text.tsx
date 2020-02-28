import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type DropdownTextProps = {
  children?: React.ReactNode,
  className?: string | null,
  [key: string]: any
};

const DropdownText = (props: DropdownTextProps) => {
  const { children, className, ...restProps } = props;

  const componentClassName = classNames({
    dropdown__text: true,
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

DropdownText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

DropdownText.defaultProps = {
  className: null
};

export default DropdownText;
