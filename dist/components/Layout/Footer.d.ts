import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type FooterProps = {
    children: React.ReactNode;
    className?: string | null;
    [key: string]: any;
};
declare const Footer: {
    (props: FooterProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default Footer;
