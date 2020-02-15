import * as React from 'react';
import Input from './Input';

export type EmailProps = {
  [key: string]: any
};

const Email = (props: EmailProps) => {
  const inputProps = {
    ...props,
    type: 'email'
  };

  return (
    <Input {...inputProps} />
  );
};

export default Email;
