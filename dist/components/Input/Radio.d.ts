/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type RadioProps = {
    id?: string | undefined;
    [key: string]: any;
};
declare const Radio: {
    ({ id, ...restProps }: RadioProps): JSX.Element;
    propTypes: {
        id: PropTypes.Requireable<string>;
    };
    defaultProps: {
        id: undefined;
    };
};
export default Radio;
