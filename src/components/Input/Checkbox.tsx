import * as React from 'react';
import * as PropTypes from 'prop-types';
import Input from './Input';
import { uid } from '../../utils/';

export type CheckboxProps = {
  id?: string | undefined,
  [key: string]: any
};

const Checkbox = ({ id = uid(), ...restProps }: CheckboxProps) => {
  const inputProps = {
    ...restProps,
    type: 'checkbox',
    id,
    prependLabel: false
  };

  return (
    <Input {...inputProps} />
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired
};

Checkbox.defaultProps = {
  id: undefined
};

export default Checkbox;
