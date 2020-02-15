import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ProgressProps = {
    type?: string;
    size?: string | null;
    value: number;
    label?: string | number | React.ReactNode | null;
    labelAlignment?: string | null;
    className?: string | null;
    rounded?: boolean;
    elevated?: boolean;
    hovered?: boolean;
    [key: string]: any;
};
declare const Progress: {
    (props: ProgressProps): JSX.Element;
    propTypes: {
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string | null>;
        value: PropTypes.Requireable<number>;
        label: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        labelAlignment: PropTypes.Requireable<string | null>;
        className: PropTypes.Requireable<string>;
        rounded: PropTypes.Requireable<boolean>;
        elevated: PropTypes.Requireable<boolean>;
        hovered: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        type: string;
        size: null;
        value: number;
        label: null;
        labelAlignment: null;
        className: null;
        rounded: boolean;
        elevated: boolean;
        hovered: boolean;
    };
};
export default Progress;
