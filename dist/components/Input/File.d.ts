/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type FileProps = {
    onChange: (event: Event) => void;
    [key: string]: any;
};
declare const File: {
    ({ onChange, ...restProps }: FileProps): JSX.Element;
    propTypes: {
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        onChange: () => void;
    };
};
export default File;
