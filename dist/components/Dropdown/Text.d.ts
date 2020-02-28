import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type DropdownTextProps = {
    children?: React.ReactNode;
    className?: string | null;
    [key: string]: any;
};
declare const DropdownText: {
    (props: DropdownTextProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default DropdownText;
