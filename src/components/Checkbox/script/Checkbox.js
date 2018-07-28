import React from 'react';
import PropTypes from 'prop-types';
import { uid } from '../../../utils/ammo';

const Checkbox = ({ id, labelText = '', labelTitle = '', isChecked = false, isDisabled = false, onChange = () => {} }) => (
  <div data-component="checkbox">
    <input
      id={id}
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
    />
    <label htmlFor={id} title={labelTitle}>
      {labelText}
    </label>
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  labelText: PropTypes.string,
  labelTitle: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  id: uid(),
  labelText: '',
  labelTitle: '',
  isChecked: false,
  isDisabled: false,
  onChange: () => {}
};

export default Checkbox;
