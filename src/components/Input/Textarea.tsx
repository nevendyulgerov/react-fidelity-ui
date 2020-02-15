import * as React from 'react';
import * as PropTypes from 'prop-types';
import Input from './Input';

const { Fragment } = React;

export type TextareaProps = {
  [key: string]: any
};

const Textarea = (props: TextareaProps) => (
  <Input
    {...props}
    renderInput={(inputProps) => (
      <Fragment>
        {/*
          // @ts-ignore */}
        <textarea {...inputProps} />
      </Fragment>
    )}
  />
);

Textarea.propTypes = {
  rows: PropTypes.number
};

Textarea.defaultProps = {
  rows: 6
};

export default Textarea;
