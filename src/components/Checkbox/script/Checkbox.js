import React from 'react';

const Checkbox = ({ id = '', labelText = '', labelTitle = '', isChecked = false, isDisabled = false, onChange = () => {} }) => (
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
