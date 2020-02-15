import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type CardDividerProps = {
  className?: string | null,
  [key: string]: any
}

const CardDivider = ({ className, ...restProps }: CardDividerProps) => {
  const componentClassName: string = classNames({
    card__divider: true,
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

CardDivider.propTypes = {
  className: PropTypes.string
};

CardDivider.defaultProps = {
  className: null
};

export default CardDivider;
