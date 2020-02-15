import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type DropdownTitleProps = {
  children: React.ReactNode,
  className?: string | null
};

const DropdownTitle = (props: DropdownTitleProps) => {
  const { children, className } = props;

  const componentClassName = classNames({
    dropdown__title: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <h4 className={componentClassName}>
      {children}
    </h4>
  );
};

DropdownTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
};

DropdownTitle.defaultProps = {
  className: null
};

export default DropdownTitle;
