import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isFunc, isObj, isNonEmptyStr } from '../utils';

export type TagProps = {
  label: React.ReactNode | string,
  size?: string,
  className?: string | null,
  removeIcon?: React.ReactNode | null,
  onRemove?: () => void
}

const Tag = ({ label, size, className, removeIcon, onRemove }: TagProps) => {
  const hasOnRemove: boolean = isFunc(onRemove);
  const hasRemoveIcon: boolean = isObj(removeIcon);
  const componentClassName: string = classNames({
    tag: true,
    [`tag--${size}`]: isNonEmptyStr(size),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <span className={componentClassName}>
      {label}

      {hasOnRemove && (
        <a
          href="#"
          className="tag__remove"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            // @ts-ignore
            onRemove();
          }}
        >
          {hasRemoveIcon ? (
            removeIcon
          ) : (
            'x'
          )}
        </a>
      )}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  removeIcon: PropTypes.node,
  onRemove: PropTypes.func
};

Tag.defaultProps = {
  size: 'md',
  className: null,
  removeIcon: null,
  onRemove: null
};

export default Tag;
