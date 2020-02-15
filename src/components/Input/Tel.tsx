import * as React from 'react';
import Input from './Input';

export type TelProps = {
  [key: string]: any
};

const Tel = (props: TelProps) => {
  const inputProps = {
    ...props,
    type: 'tel'
  };

  return (
    <Input {...inputProps} />
  );
};

export default Tel;
