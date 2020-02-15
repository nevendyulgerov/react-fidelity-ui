/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type CheckboxProps = {
    id?: string | undefined;
    [key: string]: any;
};
declare const Checkbox: {
    ({ id, ...restProps }: CheckboxProps): JSX.Element;
    propTypes: {
        id: PropTypes.Requireable<string>;
        label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
    defaultProps: {
        id: undefined;
    };
};
export default Checkbox;
