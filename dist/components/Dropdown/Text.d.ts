import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type DropdownTextProps = {
    children?: React.ReactNode;
    className?: string | null;
    scrollable?: boolean;
};
declare const DropdownText: {
    (props: DropdownTextProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        scrollable: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        className: null;
        scrollable: boolean;
    };
};
export default DropdownText;
