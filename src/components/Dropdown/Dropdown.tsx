import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Body from './Body';
import Text from './Text';
import Item from './Item';
import Divider from './Divider';
import { isNonEmptyStr, isFunc, isArr, containsNode } from '../../utils';

const { addEventListener, removeEventListener } = window;
const { useRef, useEffect } = React;

export type DropdownProps = {
  children: React.ReactNode,
  className?: string | null,
  onClickOutside?: () => void | null,
  [key: string]: any
};

const Dropdown = (props: DropdownProps) => {
  const { children, className, onClickOutside, ...restProps } = props;
  const refComponent = useRef(null);
  const latestOnClickOutside = useRef(onClickOutside);
  const hasOnClickOutside: boolean = isFunc(onClickOutside);
  const componentClassName: string = classNames({
    dropdown: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  const onClick = (event: MouseEvent): void => {
    const pathNodes = event.composedPath();
    const dropdownNode = refComponent.current;
    const hasPathNodes = isArr(pathNodes);

    // @ts-ignore
    if (hasPathNodes && !containsNode(pathNodes, dropdownNode)) {
      // @ts-ignore
      onClickOutside();
    }
  };

  useEffect(() => {
    latestOnClickOutside.current = onClickOutside;

    if (hasOnClickOutside) {
      addEventListener('click', onClick);
    }

    return () => {
      if (hasOnClickOutside) {
        removeEventListener('click', onClick);
      }
    };
  }, [onClickOutside]);

  return (
    <div
      {...restProps}
      ref={refComponent}
      className={componentClassName}
    >
      {children}
    </div>
  );
};

Dropdown.Body = Body;
Dropdown.Text = Text;
Dropdown.Item = Item;
Dropdown.Divider = Divider;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  onClickOutside: PropTypes.func
};

Dropdown.defaultProps = {
  className: null,
  onClickOutside: null
};

export default Dropdown;
