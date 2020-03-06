import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type DropdownProps = {
    children: React.ReactNode;
    className?: string | null;
    active?: boolean | false;
    onClickOutside?: () => void | null;
    [key: string]: any;
};
declare const Dropdown: {
    (props: DropdownProps): JSX.Element;
    Body: {
        (props: import("./Body").DropdownBodyProps): JSX.Element;
        sizes: string[];
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            size: PropTypes.Requireable<string>;
            className: PropTypes.Requireable<string>;
            active: PropTypes.Requireable<boolean>;
        };
        defaultProps: {
            size: string;
            className: null;
            active: boolean;
        };
    };
    Text: {
        (props: import("./Text").DropdownTextProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
        };
        defaultProps: {
            className: null;
        };
    };
    Item: {
        (props: import("./Item").DropdownItemProps): JSX.Element;
        propTypes: {
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            className: PropTypes.Requireable<string>;
            active: PropTypes.Requireable<boolean>;
        };
        defaultProps: {
            className: null;
            active: boolean;
        };
    };
    Divider: {
        (props: import("./Divider").DropdownDividerProps): JSX.Element;
        propTypes: {
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
        onClickOutside: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        className: null;
        active: boolean;
        onClickOutside: null;
    };
};
export default Dropdown;
