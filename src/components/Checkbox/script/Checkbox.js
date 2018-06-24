import React from 'react';
import { uid } from '../../../utils/ammo';

const Checkbox = ({ id = uid(), labelText = '', labelTitle = '', isChecked = false, isDisabled = false, onChange = () => {} }) => (
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

export default Checkbox;
