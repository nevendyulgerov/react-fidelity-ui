import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ModalHeaderProps = {
    children: React.ReactNode;
    className?: string | null;
};
declare const ModalHeader: {
    ({ children, className }: ModalHeaderProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default ModalHeader;
