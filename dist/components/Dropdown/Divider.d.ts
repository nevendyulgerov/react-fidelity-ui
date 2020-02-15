/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type DropdownDividerProps = {
    className?: string | null;
    [key: string]: any;
};
declare const DropdownDivider: {
    ({ className, ...restProps }: DropdownDividerProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default DropdownDivider;
