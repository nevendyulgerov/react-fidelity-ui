import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type NotificationProps = {
    children: React.ReactNode;
    type?: string;
    icon?: React.ReactNode | null;
    className?: string | null;
    bordered?: boolean;
    hovered?: boolean;
    rounded?: boolean;
    elevated?: boolean;
    prependIcon?: boolean;
    [key: string]: any;
};
declare const Notification: {
    (props: NotificationProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        type: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        bordered: PropTypes.Requireable<boolean>;
        hovered: PropTypes.Requireable<boolean>;
        rounded: PropTypes.Requireable<boolean>;
        elevated: PropTypes.Requireable<boolean>;
        prependIcon: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        type: string;
        icon: null;
        className: null;
        bordered: boolean;
        hovered: boolean;
        rounded: boolean;
        elevated: boolean;
        prependIcon: boolean;
    };
};
export default Notification;
