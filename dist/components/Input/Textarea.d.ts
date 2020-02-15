/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type TextareaProps = {
    [key: string]: any;
};
declare const Textarea: {
    (props: TextareaProps): JSX.Element;
    propTypes: {
        rows: PropTypes.Requireable<number>;
    };
    defaultProps: {
        rows: number;
    };
};
export default Textarea;
