import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type NavProps = {
    children: React.ReactNode;
    active?: boolean;
};
declare const Nav: {
    ({ children, active }: NavProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        active: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        active: boolean;
    };
};
export default Nav;
