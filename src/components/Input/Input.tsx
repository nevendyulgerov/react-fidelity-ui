import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isObj, isNull, isNonEmptyStr } from '../../utils';

const { Fragment } = React;

export type InputProps = {
  id?: undefined | string,
  type?: string,
  size?: string | null,
  width?: string | null,
  label?: string | React.ReactNode,
  icon?: React.ReactNode | null,
  className?: string | null,
  prependIcon?: boolean,
  prependLabel?: boolean,
  active?: boolean,
  rounded?: boolean,
  readOnly?: boolean,
  valid?: boolean,
  validated?: boolean,
  loading?: boolean,
  isSwitch?: boolean,
  bordered?: boolean,
  flat?: boolean,
  hovered?: boolean,
  squared?: boolean,
  renderInput: (props: React.InputHTMLAttributes<HTMLInputElement>) => React.ReactNode
};

const Input = (props: InputProps) => {
  const { type, size, width, label, icon, className, prependIcon, prependLabel, active, rounded, readOnly, valid, validated, loading, isSwitch, bordered, flat, hovered, squared, renderInput, ...restProps } = props;
  const hasIcon = isObj(icon);
  const isRadio = type === 'radio';
  const isCheckbox = type === 'checkbox';
  const isBinaryInput = isRadio || isCheckbox;
  const inputClass = classNames({
    'form-control__input': true,
    'form-control__input--auto-width': !isNull(width),
    'form-control--active': active,
    'form-control__input--rounded': rounded,
    'form-control__input--readOnly': readOnly,
    'form-control__input--valid': validated && valid,
    'form-control__input--no-border': !bordered,
    'form-control__input--flat': flat,
    'form-control__input--hovered': hovered,
    'form-control__input--squared': squared,
    'form-control__input--invalid': validated && !valid,
    'form-control__input--loading': loading,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });
  const inputControlClass = classNames({
    'form-control': true,
    'form-control--rounded': rounded,
    'form-control--radio': isRadio,
    'form-control--checkbox': !isSwitch && isCheckbox,
    'form-control--switch': isSwitch,
    'form-control--prepend': (loading && prependIcon) || (hasIcon && prependIcon),
    'form-control--append': (loading && !prependIcon) || (hasIcon && !prependIcon),
    [`form-control--${size}`]: isNonEmptyStr(size)
  });

  const labelClass = classNames({
    'label--rounded': rounded
  });

  const renderLabel = () => (
    <label
      htmlFor={restProps.id}
      className={labelClass}
    >
      {label}
    </label>
  );

  const renderBeforeLabel = () => label && prependLabel && renderLabel();
  const renderAfterLabel = () => label && !prependLabel && renderLabel();

  const inputProps = {
    ...restProps,
    type,
    readOnly,
    className: inputClass
  };

  return (
    <Fragment>
      {!isBinaryInput && renderBeforeLabel()}

      <span className={inputControlClass}>
        {isBinaryInput && renderBeforeLabel()}

        {renderInput(inputProps)}

        {hasIcon && (
          <span className="form-control__input-icon">
            {icon}
          </span>
        )}

        {isBinaryInput && renderAfterLabel()}
      </span>

      {!isBinaryInput && renderAfterLabel()}
    </Fragment>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'number',
    'email',
    'password',
    'search',
    'tel',
    'checkbox',
    'radio',
    'file'
  ]),
  size: PropTypes.oneOf([null, 'sm', 'lg']),
  width: PropTypes.oneOf([
    null,
    'initial'
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  className: PropTypes.string,
  icon: PropTypes.node,
  prependIcon: PropTypes.bool,
  prependLabel: PropTypes.bool,
  active: PropTypes.bool,
  rounded: PropTypes.bool,
  readOnly: PropTypes.bool,
  validated: PropTypes.bool,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  isSwitch: PropTypes.bool,
  bordered: PropTypes.bool,
  flat: PropTypes.bool,
  hovered: PropTypes.bool,
  squared: PropTypes.bool,
  renderInput: PropTypes.func
};

Input.defaultProps = {
  id: null,
  type: 'text',
  size: null,
  width: null,
  label: null,
  className: null,
  icon: null,
  prependIcon: true,
  prependLabel: true,
  active: false,
  rounded: false,
  readOnly: false,
  validated: false,
  valid: true,
  loading: false,
  isSwitch: false,
  bordered: true,
  flat: true,
  hovered: false,
  squared: false,
  renderInput: (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} />
  )
};

export default Input;
