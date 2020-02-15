import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ContainerProps = {
    children: React.ReactNode;
    className?: string | null;
    align?: string | null;
    [key: string]: any;
};
declare const Content: {
    (props: ContainerProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        align: PropTypes.Requireable<string | null>;
    };
    defaultProps: {
        className: null;
        align: null;
    };
};
export default Content;
