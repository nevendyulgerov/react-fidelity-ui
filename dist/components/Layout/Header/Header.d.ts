import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type HeaderProps = {
    children: React.ReactNode;
    className?: string | null;
};
declare const Header: {
    ({ children, className }: HeaderProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default Header;
