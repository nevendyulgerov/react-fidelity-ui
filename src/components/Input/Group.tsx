import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type InputGroupProps = {
  children: React.ReactNode,
  className?: string | null,
  isRow?: boolean
};

const InputGroup = ({ children, className, isRow }: InputGroupProps) => {
  const componentClassName = classNames({
    'form-group': true,
    'form-group--row': isRow,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div className={componentClassName}>
      {children}
    </div>
  );
};

InputGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  isRow: PropTypes.bool
};

InputGroup.defaultProps = {
  className: null,
  isRow: false
};

export default InputGroup;
