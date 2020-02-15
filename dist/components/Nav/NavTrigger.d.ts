import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type NavTriggerProps = {
    renderTrigger: (className: string) => React.ReactNode;
    className?: string | null;
    [key: string]: any;
};
declare const NavTrigger: {
    ({ className, renderTrigger }: NavTriggerProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        renderTrigger: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        className: null;
    };
};
export default NavTrigger;
