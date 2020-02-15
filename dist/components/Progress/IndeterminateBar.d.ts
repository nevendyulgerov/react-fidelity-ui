/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type ProgressIndeterminateBarProps = {
    className?: string | null;
    [key: string]: any;
};
declare const ProgressIndeterminateBar: {
    (props: ProgressIndeterminateBarProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default ProgressIndeterminateBar;
