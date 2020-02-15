import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type EmptyProps = {
    header?: React.ReactNode | null;
    text: React.ReactNode | string;
    footer?: React.ReactNode | null;
    size?: string | null;
    className?: string | null;
    rounded?: boolean;
    hovered?: boolean;
    bordered?: boolean;
    flat?: boolean;
    [key: string]: any;
};
declare const Empty: {
    (props: EmptyProps): JSX.Element;
    propTypes: {
        header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        text: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        footer: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        size: PropTypes.Requireable<string | null>;
        className: PropTypes.Requireable<string>;
        rounded: PropTypes.Requireable<boolean>;
        hovered: PropTypes.Requireable<boolean>;
        bordered: PropTypes.Requireable<boolean>;
        flat: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        header: null;
        footer: null;
        size: null;
        className: null;
        rounded: boolean;
        hovered: boolean;
        bordered: boolean;
        flat: boolean;
    };
};
export default Empty;
