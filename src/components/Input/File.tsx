import * as React from 'react';
import * as PropTypes from 'prop-types';
import Input from './Input';

export type FileProps = {
  onChange: (event: Event) => void,
  [key: string]: any
};

const File = ({ onChange, ...restProps }: FileProps) => {
  const inputProps = {
    ...restProps,
    type: 'file',
    onChange: (event: React.SyntheticEvent) => {
      event.persist();
      onChange(event.nativeEvent);
    }
  };

  return (
    <Input {...inputProps} />
  );
};

File.propTypes = {
  onChange: PropTypes.func
};

File.defaultProps = {
  onChange: () => {}
};

export default File;
