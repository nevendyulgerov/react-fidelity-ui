import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ModalContentProps = {
    children: React.ReactNode;
    size?: string | 'auto';
    className?: string | null;
    [key: string]: any;
};
declare const ModalContent: {
    (props: ModalContentProps): JSX.Element;
    sizes: string[];
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        size: string;
        className: null;
    };
};
export default ModalContent;
