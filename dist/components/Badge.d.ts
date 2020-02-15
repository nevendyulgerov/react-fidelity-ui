import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type BadgeProps = {
    children?: React.ReactNode | null;
    type?: string;
    size?: string | null;
    className?: string | null;
    loading?: boolean;
    squared?: boolean;
    rounded?: boolean;
    fab?: boolean;
    outlined?: boolean;
    [key: string]: any;
};
declare const Badge: {
    (props: BadgeProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<boolean>;
        squared: PropTypes.Requireable<boolean>;
        rounded: PropTypes.Requireable<boolean>;
        fab: PropTypes.Requireable<boolean>;
        outlined: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        children: null;
        type: string;
        size: string;
        className: null;
        loading: boolean;
        squared: boolean;
        rounded: boolean;
        fab: boolean;
        outlined: boolean;
    };
};
export default Badge;
