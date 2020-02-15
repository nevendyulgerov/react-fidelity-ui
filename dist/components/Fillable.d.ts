import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type FillableProps = {
    children: React.ReactNode;
    placeholder?: string | null;
    className?: string | null;
    contentEditable?: boolean;
    [key: string]: any;
};
declare const Fillable: {
    (props: FillableProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        placeholder: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        contentEditable: PropTypes.Requireable<boolean>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        placeholder: null;
        className: null;
        contentEditable: boolean;
        onKeyDown: (event: Event) => boolean;
    };
};
export default Fillable;
