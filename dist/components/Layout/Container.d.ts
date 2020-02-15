import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ContainerProps = {
    children: React.ReactNode;
    className?: string | null;
    [key: string]: any;
};
declare const Container: {
    (props: ContainerProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default Container;
