import * as React from 'react';
import * as PropTypes from 'prop-types';
interface Option {
    value: string | number;
    label: string | number | React.ReactNode;
}
export declare type SelectProps = {
    value: string | number;
    options: Array<Option>;
};
declare const Select: {
    ({ options, ...restProps }: SelectProps): JSX.Element;
    propTypes: {
        value: PropTypes.Validator<string | number>;
        options: PropTypes.Validator<(PropTypes.InferProps<{
            value: PropTypes.Requireable<string | number>;
            label: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        }> | null | undefined)[]>;
    };
};
export default Select;
