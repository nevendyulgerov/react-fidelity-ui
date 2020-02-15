import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type GridProps = {
    children: React.ReactNode;
    className?: string | null;
    [key: string]: any;
};
declare const Grid: {
    (props: GridProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
    Row: {
        (props: import("./Row").RowProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
        };
        defaultProps: {
            className: null;
        };
    };
    Col: {
        (props: import("./Col").ColProps): JSX.Element;
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
};
export default Grid;
