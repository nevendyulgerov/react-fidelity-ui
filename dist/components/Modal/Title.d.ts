import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ModalTitleProps = {
    children: React.ReactNode;
    className?: string | null;
};
declare const ModalTitle: {
    ({ children, className }: ModalTitleProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default ModalTitle;
