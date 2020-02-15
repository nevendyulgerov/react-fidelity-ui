import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr, isNum, isFunc } from '../../utils';

const { useState, useRef, useEffect } = React;

export interface IDropdownBodyStyle {
  top: string
}

export type DropdownProps = {
  children: React.ReactNode,
  trigger: React.ReactNode,
  size?: string,
  nudgeBottom?: number,
  align?: string,
  className?: string | null,
  active?: boolean,
  onClickOutside?: () => void | null,
  [key: string]: any
};

const Dropdown = (props: DropdownProps) => {
  const { children, trigger, size, nudgeBottom, align, className, active, onClickOutside, ...restProps } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isBodyHovered, setIsBodyHovered] = useState(false);
  const refComponent = useRef(null);
  const hasOnClickOutside: boolean = isFunc(onClickOutside);
  const componentClassName: string = classNames({
    dropdown: true,
    'dropdown--active': active,
    [`dropdown--align-${align}`]: isNonEmptyStr(align),
    [`dropdown--${size}`]: size !== 'sm',
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  const closeOnClick = (): void => {
    if (hasOnClickOutside && active && !isHovered && !isBodyHovered) {
      // @ts-ignore
      onClickOutside();
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeOnClick);
    return () => window.removeEventListener('click', closeOnClick);
  });

  // @ts-ignore
  const dropdownBodyStyle: IDropdownBodyStyle = isNum(nudgeBottom) && nudgeBottom > 0
    // @ts-ignore
    ? { top: `calc(100% + ${nudgeBottom}px)` }
    : {};

  const onMouseEnter = (event: React.MouseEvent) => {
    setIsHovered(true);

    if (isFunc(restProps.onMouseEnter)) {
      restProps.onMouseEnter(event);
    }
  };

  const onMouseLeave = (event: React.MouseEvent) => {
    setIsHovered(false);

    if (isFunc(restProps.onMouseLeave)) {
      restProps.onMouseLeave(event);
    }
  };

  const onMouseEnterBody = () => {
    setIsBodyHovered(true);
  };

  const onMouseLeaveBody = () => {
    setIsBodyHovered(false);
  };

  return (
    <div
      {...restProps}
      ref={refComponent}
      className={componentClassName}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="dropdown__header">
        {trigger}
      </div>

      <div
        className="dropdown__body"
        style={dropdownBodyStyle}
        onMouseEnter={onMouseEnterBody}
        onMouseLeave={onMouseLeaveBody}
      >
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  trigger: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  nudgeBottom: PropTypes.number,
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  className: PropTypes.string,
  active: PropTypes.bool,
  onClickOutside: PropTypes.func
};

Dropdown.defaultProps = {
  size: 'sm',
  nudgeBottom: 1,
  align: 'left',
  className: null,
  active: false,
  onClickOutside: null
};

export default Dropdown;
