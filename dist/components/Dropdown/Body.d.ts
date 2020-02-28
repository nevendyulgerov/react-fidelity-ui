import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type DropdownBodyProps = {
    children: React.ReactNode;
    size?: string | 'auto';
    className?: string | null;
    active?: boolean | false;
    [key: string]: any;
};
declare const DropdownBody: {
    (props: DropdownBodyProps): JSX.Element;
    sizes: string[];
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        size: string;
        className: null;
        active: boolean;
    };
};
export default DropdownBody;
