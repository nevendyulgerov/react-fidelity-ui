import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type TagProps = {
    label: React.ReactNode | string;
    size?: string;
    className?: string | null;
    removeIcon?: React.ReactNode | null;
    onRemove?: () => void;
};
declare const Tag: {
    ({ label, size, className, removeIcon, onRemove }: TagProps): JSX.Element;
    propTypes: {
        label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        size: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        removeIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onRemove: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        size: string;
        className: null;
        removeIcon: null;
        onRemove: null;
    };
};
export default Tag;
