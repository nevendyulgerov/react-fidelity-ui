import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type NavMenuItemProps = {
    children: React.ReactNode;
    className?: string | null;
    active?: boolean;
    home?: boolean;
};
declare const NavMenuItem: {
    ({ children, className, active, home }: NavMenuItemProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<boolean>;
        home: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        className: null;
        active: boolean;
        home: boolean;
    };
};
export default NavMenuItem;
