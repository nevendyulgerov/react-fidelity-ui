import * as React from 'react';
import Input from './Input';

export type SearchProps = {
  [key: string]: any
};

const Search = (props: SearchProps) => {
  const inputProps = {
    ...props,
    type: 'search'
  };

  return (
    <Input {...inputProps} />
  );
};

export default Search;
