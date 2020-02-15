/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type ProgressBarProps = {
    value: number;
    className?: string | null;
    [key: string]: any;
};
export interface IProgressBarStyle {
    width: string;
}
declare const ProgressBar: {
    (props: ProgressBarProps): JSX.Element;
    propTypes: {
        value: PropTypes.Validator<number>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default ProgressBar;
