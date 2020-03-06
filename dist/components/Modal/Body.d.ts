import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ModalBodyProps = {
    children: React.ReactNode;
    className?: string | null;
    [key: string]: any;
};
declare const ModalBody: {
    (props: ModalBodyProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default ModalBody;
