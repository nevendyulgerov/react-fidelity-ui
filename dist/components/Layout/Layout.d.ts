import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type LayoutProps = {
    children: React.ReactNode;
    className?: string | null;
    [key: string]: any;
};
declare const Layout: {
    (props: LayoutProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
    Container: {
        (props: import("./Container").ContainerProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
        };
        defaultProps: {
            className: null;
        };
    };
    Content: {
        (props: import("./Content").ContainerProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
            align: PropTypes.Requireable<string | null>;
        };
        defaultProps: {
            className: null;
            align: null;
        };
    };
    Footer: {
        (props: import("./Footer").FooterProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
        };
        defaultProps: {
            className: null;
        };
    };
    Header: {
        (props: import("./Header").HeaderProps): JSX.Element;
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
};
export default Layout;
