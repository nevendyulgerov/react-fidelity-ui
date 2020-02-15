import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../utils';

export type FillableProps = {
  children: React.ReactNode,
  placeholder?: string | null,
  className?: string | null,
  contentEditable?: boolean,
  [key: string]: any
};

const Fillable = (props: FillableProps) => {
  const { children, placeholder, className, contentEditable, onKeyDown, ...restProps } = props;
  const componentClassName: string = classNames({
    fillable: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      role="textbox"
      tabIndex={0}
      className={componentClassName}
      contentEditable={contentEditable}
      suppressContentEditableWarning
      data-placeholder={placeholder}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};

Fillable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  contentEditable: PropTypes.bool,
  onKeyDown: PropTypes.func
};

Fillable.defaultProps = {
  placeholder: null,
  className: null,
  contentEditable: true,
  onKeyDown: (event: Event) => {
    event.preventDefault();
    return false;
  }
};

export default Fillable;
