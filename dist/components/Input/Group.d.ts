import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type InputGroupProps = {
    children: React.ReactNode;
    className?: string | null;
    isRow?: boolean;
};
declare const InputGroup: {
    ({ children, className, isRow }: InputGroupProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        isRow: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        className: null;
        isRow: boolean;
    };
};
export default InputGroup;
