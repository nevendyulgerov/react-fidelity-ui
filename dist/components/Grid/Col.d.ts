import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ColProps = {
    children: React.ReactNode;
    widths?: [string] | null;
    orders?: [number | string] | null;
    className?: string | null;
    [key: string]: any;
};
declare const Col: {
    (props: ColProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        widths: PropTypes.Requireable<(string | null | undefined)[]>;
        orders: PropTypes.Requireable<(string | number | null | undefined)[]>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        widths: null;
        orders: null;
        className: null;
    };
};
export default Col;
