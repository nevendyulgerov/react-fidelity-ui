import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type HeaderProps = {
    children: React.ReactNode;
    className?: string | null;
    sticky?: boolean;
    [key: string]: any;
};
declare const Header: {
    (props: HeaderProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        sticky: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        className: null;
        sticky: boolean;
    };
};
export default Header;
