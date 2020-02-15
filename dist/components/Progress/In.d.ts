/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type ProgressInProps = {
    value: number;
    className?: string | null;
    [key: string]: any;
};
export interface IProgressInStyle {
    width: string;
}
declare const ProgressIn: {
    (props: ProgressInProps): JSX.Element;
    propTypes: {
        value: PropTypes.Validator<number>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default ProgressIn;
