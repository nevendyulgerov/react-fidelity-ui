import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type DropdownItemProps = {
    children: React.ReactNode;
    className?: string | null;
    active?: boolean | false;
    [key: string]: any;
};
declare const DropdownItem: {
    (props: DropdownItemProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        className: null;
        active: boolean;
    };
};
export default DropdownItem;
