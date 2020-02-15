import * as React from 'react';
import Input from './Input';

export type NumberProps = {
  [key: string]: any
};

const Number = (props: NumberProps) => {
  const inputProps = {
    ...props,
    type: 'number'
  };

  return (
    <Input {...inputProps} />
  );
};

export default Number;
