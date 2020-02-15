import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isNonEmptyStr } from '../../utils';

export type ProgressBarProps = {
  value: number,
  className?: string | null,
  [key: string]: any
};

export interface IProgressBarStyle {
  width: string
}

const ProgressBar = (props: ProgressBarProps) => {
  const { value, className, ...restProps } = props;
  const { style = {} } = restProps;
  const progressInStyle: IProgressBarStyle = {
    ...style,
    width: `${value}%`
  };
  const componentClassName: string = classNames({
    progress__bar: true,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <span
      {...restProps}
      role="progressbar"
      className={componentClassName}
      style={progressInStyle}
    />
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string
};

ProgressBar.defaultProps = {
  className: null
};

export default ProgressBar;
