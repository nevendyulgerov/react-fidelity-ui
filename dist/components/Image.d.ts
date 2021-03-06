import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type ImageProps = {
    src: string;
    alt?: string;
    size?: string | null;
    aspectRatio?: string | null;
    className?: string | null;
    spinner?: React.ReactNode | null;
    spinnerHideDelay?: number;
    rounded?: boolean;
    hovered?: boolean;
    elevated?: boolean;
    expanded?: boolean;
    contained?: boolean;
    onLoad?: () => void | null;
    onError?: () => void | null;
    [key: string]: any;
};
declare const Image: {
    (props: ImageProps): JSX.Element;
    propTypes: {
        src: PropTypes.Validator<string>;
        alt: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string | null>;
        aspectRatio: PropTypes.Requireable<string | null>;
        className: PropTypes.Requireable<string>;
        spinner: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        spinnerHideDelay: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        rounded: PropTypes.Requireable<boolean>;
        hovered: PropTypes.Requireable<boolean>;
        elevated: PropTypes.Requireable<boolean>;
        expanded: PropTypes.Requireable<boolean>;
        contained: PropTypes.Requireable<boolean>;
        onLoad: PropTypes.Requireable<(...args: any[]) => any>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        alt: null;
        size: null;
        aspectRatio: null;
        className: null;
        spinner: null;
        spinnerHideDelay: number;
        rounded: boolean;
        hovered: boolean;
        elevated: boolean;
        expanded: boolean;
        contained: boolean;
        onLoad: null;
        onError: null;
    };
};
export default Image;
