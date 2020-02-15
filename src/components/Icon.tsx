import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Context from './Context';
import { isNum, isNonEmptyStr } from '../utils';

const { useContext } = React;

export type IconProps = {
  id: string,
  size?: number | null,
  className?: string | null,
  rotate?: number | null,
  rounded?: boolean,
  spinning?: boolean,
  [key: string]: any
};

const Icon = (props: IconProps) => {
  const { id, size, className, rotate, rounded, spinning, ...restProps } = props;
  const context: { iconsSprite: string | null } = useContext(Context);
  const { iconsSprite } = context;
  const rotated: boolean = isNum(rotate);
  const componentClassName: string = classNames({
    icon: true,
    'icon--rounded': rounded,
    'icon--spinning': spinning,
    'icon--rotated': rotated,
    [`icon--rotate-${rotate}`]: rotated,
    [`icon--${size}`]: isNum(size),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  if (!isNonEmptyStr(iconsSprite)) {
    return null;
  }

  const iconHref: string = `${iconsSprite}#${id}`;

  return (
    <svg
      {...restProps}
      className={componentClassName}
    >
      <use xlinkHref={iconHref} />
    </svg>
  );
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64]),
  rotate: PropTypes.oneOf([45, 90, 135, 180, 225, 270, 315, 360]),
  className: PropTypes.string,
  rounded: PropTypes.bool,
  spinning: PropTypes.bool
};

Icon.defaultProps = {
  size: null,
  rotate: null,
  className: null,
  rounded: false,
  spinning: false
};

export default Icon;
