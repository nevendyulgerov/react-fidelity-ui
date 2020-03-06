import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ModalProps = {
    children: React.ReactNode;
    className?: string | null;
    active?: boolean | false;
    disableScroll?: boolean | true;
    [key: string]: any;
};
declare const Modal: {
    (props: ModalProps): JSX.Element;
    Backdrop: {
        (props: import("./Backdrop").ModalBackdropProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
        };
        defaultProps: {
            className: null;
        };
    };
    Body: {
        (props: import("./Body").ModalBodyProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
        };
        defaultProps: {
            className: null;
        };
    };
    Content: {
        (props: import("./Content").ModalContentProps): JSX.Element;
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
    Footer: {
        (props: import("./Footer").ModalFooterProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
        };
        defaultProps: {
            className: null;
        };
    };
    Header: {
        (props: import("./Header").ModalHeaderProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
        };
        defaultProps: {
            className: null;
        };
    };
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<boolean>;
        disableScroll: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        className: null;
        active: boolean;
        disableScroll: boolean;
    };
};
export default Modal;
