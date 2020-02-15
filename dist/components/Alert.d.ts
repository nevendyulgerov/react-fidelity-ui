import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type AlertProps = {
    children: React.ReactNode;
    verticalPosition?: string;
    timeout?: number;
    className?: string | null;
    [key: string]: any;
};
declare const Alert: {
    (props: AlertProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        verticalPosition: PropTypes.Requireable<string>;
        timeout: PropTypes.Requireable<number>;
        className: PropTypes.Requireable<string>;
        onDismiss: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        verticalPosition: string;
        timeout: number;
        className: null;
        onDismiss: () => void;
    };
};
export default Alert;
