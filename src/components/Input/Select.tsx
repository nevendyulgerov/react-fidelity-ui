import * as React from 'react';
import * as PropTypes from 'prop-types';
import Input from './Input';

const { Fragment } = React;

interface Option {
  value: string | number,
  label: string | number | React.ReactNode
}

export type SelectProps = {
  value: string | number,
  options: Array<Option>
};

const Select = ({ options, ...restProps }: SelectProps) => (
  <Input
    {...restProps}
    renderInput={({ type, ...restInputProps }) => (
      <Fragment>
        {/*
          // @ts-ignore */}
        <select {...restInputProps}>
          {options.map(({ value, label }) => (
            <option
              key={value}
              value={value}
            >
              {label}
            </option>
          ))}
        </select>
      </Fragment>
    )}
  />
);

Select.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node
      ])
    })
  ).isRequired
};

export default Select;
