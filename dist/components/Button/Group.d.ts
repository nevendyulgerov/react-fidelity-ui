import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ButtonGroupProps = {
    children: React.ReactNode;
    align?: string;
    className?: string | null;
    rounded?: boolean;
    wrapped?: boolean;
    stacked?: boolean;
    [key: string]: any;
};
declare const ButtonGroup: {
    (props: ButtonGroupProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        align: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        rounded: PropTypes.Requireable<boolean>;
        wrapped: PropTypes.Requireable<boolean>;
        stacked: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        align: string;
        className: null;
        rounded: boolean;
        wrapped: boolean;
        stacked: boolean;
    };
};
export default ButtonGroup;
