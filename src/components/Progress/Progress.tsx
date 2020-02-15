import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import ProgressBar from './Bar';
import ProgressLabel from './Label';
import { typeShape, sizeShape, labelShape, labelAlignmentShape } from './PropTypes';
import { isNonEmptyStr, limitNum, isRenderable } from '../../utils';

export type ProgressProps = {
  type?: string,
  size?: string | null,
  value: number,
  label?: string | number | React.ReactNode | null,
  labelAlignment?: string | null,
  className?: string | null,
  rounded?: boolean,
  elevated?: boolean,
  hovered?: boolean,
  [key: string]: any
};

const Progress = (props: ProgressProps) => {
  const { type, size, value, label, labelAlignment, className, rounded, elevated, hovered, ...restProps } = props;
  const maxValue: number = 100;
  const formattedValue: number = limitNum(value, maxValue);
  const hasLabelSlot: boolean = isRenderable(label);
  const componentClassName: string = classNames({
    progress: true,
    'progress--rounded': rounded,
    'progress--elevated': elevated,
    'progress--hovered': hovered,
    [`progress--${type}`]: isNonEmptyStr(type),
    [`progress--${size}`]: isNonEmptyStr(size),
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
    >
      <ProgressBar
        role="progressbar"
        aria-valuenow={formattedValue}
        aria-valuemin={0}
        aria-valuemax={maxValue}
        value={formattedValue}
      />

      {hasLabelSlot && (
        <ProgressLabel
          label={label}
          value={formattedValue}
          alignment={labelAlignment}
        />
      )}
    </div>
  );
};

Progress.propTypes = {
  type: typeShape,
  size: sizeShape,
  value: PropTypes.number,
  label: labelShape,
  labelAlignment: labelAlignmentShape,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  elevated: PropTypes.bool,
  hovered: PropTypes.bool
};

Progress.defaultProps = {
  type: 'secondary',
  size: null,
  value: 0,
  label: null,
  labelAlignment: null,
  className: null,
  rounded: true,
  elevated: false,
  hovered: false
};

export default Progress;
