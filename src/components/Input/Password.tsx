import * as React from 'react';
import Input from './Input';

export type PasswordProps = {
  [key: string]: any
};

const Password = (props: PasswordProps) => {
  const inputProps = {
    ...props,
    type: 'password'
  };

  return (
    <Input {...inputProps} />
  );
};

export default Password;
