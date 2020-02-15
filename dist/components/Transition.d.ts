import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type AnimationProps = {
    children: React.ReactNode;
    type?: string | null;
    className?: string | null;
    [key: string]: any;
};
declare const Transition: {
    (props: AnimationProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        type: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        type: string;
        className: null;
    };
};
export default Transition;
