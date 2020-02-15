import * as React from 'react';
import * as PropTypes from 'prop-types';
import Input from './Input';
import { uid } from '../../utils/';

export type RadioProps = {
  id?: string | undefined,
  [key: string]: any
};

const Radio = ({ id = uid(), ...restProps }: RadioProps) => {
  const inputProps = {
    ...restProps,
    type: 'radio',
    id,
    prependLabel: false
  };

  return (
    <Input {...inputProps} />
  );
};

Radio.propTypes = {
  id: PropTypes.string
};

Radio.defaultProps = {
  id: undefined
};

export default Radio;
