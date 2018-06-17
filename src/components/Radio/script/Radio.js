import React from 'react';

const Radio = ({ id = '', name = '', labelText = '', labelTitle = '', isChecked = false, isDisabled = false, onChange = () => {} }) => (
  <div data-component="radio">
    <input
      id={id}
      type="radio"
      name={name}
      checked={isChecked}
      disabled={isDisabled}
      onChange={onChange}
    />
    <label htmlFor={id} title={labelTitle}>
      {labelText}
    </label>
  </div>
);

export default Radio;
