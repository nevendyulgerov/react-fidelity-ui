import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ProgressLabelProps = {
    value: number;
    label?: string | number | React.ReactNode | null;
    alignment?: string | null;
    className?: string | null;
    [key: string]: any;
};
export interface IProgressLabelStyle {
    right?: string | undefined;
}
declare const ProgressLabel: {
    (props: ProgressLabelProps): JSX.Element;
    propTypes: {
        value: PropTypes.Requireable<number>;
        label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        alignment: PropTypes.Requireable<string | null>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        value: number;
        alignment: null;
        className: null;
    };
};
export default ProgressLabel;
