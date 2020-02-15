import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ModalProps = {
    children: React.ReactNode;
    header?: React.ReactNode | null;
    footer?: React.ReactNode | null;
    size?: string;
    className?: string | null;
    active?: boolean;
    fullscreen?: boolean;
    onEscape?: () => void;
};
declare const Modal: {
    (props: ModalProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footer: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<boolean>;
        fullscreen: PropTypes.Requireable<boolean>;
        onEscape: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        header: null;
        footer: null;
        size: string;
        className: null;
        active: boolean;
        fullscreen: boolean;
        onEscape: null;
    };
};
export default Modal;
