import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { labelShape, labelAlignmentShape } from './PropTypes';
import { isNonEmptyStr } from '../../utils';

export type ProgressLabelProps = {
  value: number,
  label?: string | number | React.ReactNode | null,
  alignment?: string | null,
  className?: string | null,
  [key: string]: any
};

export interface IProgressLabelStyle {
  right?: string | undefined
}

const ProgressLabel = (props: ProgressLabelProps) => {
  const { value, label, alignment, className, ...restProps } = props;
  const { style = {} } = restProps;
  const hasAlignment: boolean = isNonEmptyStr(alignment);
  const hasStickyAlignment: boolean = hasAlignment && alignment === 'sticky';
  const progressLabelStyle: IProgressLabelStyle = hasStickyAlignment
    ? {
      ...style,
      right: `${100 - value}%`
    }
    : style;

  const componentClassName: string = classNames({
    progress__label: true,
    [`progress__label--${alignment}`]: hasAlignment,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  return (
    <div
      {...restProps}
      className={componentClassName}
      style={progressLabelStyle}
    >
      {label}
    </div>
  );
};

ProgressLabel.propTypes = {
  value: PropTypes.number,
  label: labelShape.isRequired,
  alignment: labelAlignmentShape,
  className: PropTypes.string
};

ProgressLabel.defaultProps = {
  value: 0,
  alignment: null,
  className: null
};

export default ProgressLabel;
