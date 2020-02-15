import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type DividerProps = {
    children?: React.ReactNode | string | null;
    size?: string | null;
    className?: string | null;
    [key: string]: any;
};
declare const Divider: {
    (props: DividerProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        size: PropTypes.Requireable<string | null>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        children: null;
        size: null;
        className: null;
    };
};
export default Divider;
