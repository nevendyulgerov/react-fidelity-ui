import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface IDropdownBodyStyle {
    top: string;
}
export declare type DropdownProps = {
    children: React.ReactNode;
    trigger: React.ReactNode;
    size?: string;
    nudgeBottom?: number;
    align?: string;
    className?: string | null;
    active?: boolean;
    onClickOutside?: () => void | null;
    [key: string]: any;
};
declare const Dropdown: {
    (props: DropdownProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        trigger: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        size: PropTypes.Requireable<string>;
        nudgeBottom: PropTypes.Requireable<number>;
        align: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<boolean>;
        onClickOutside: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        size: string;
        nudgeBottom: number;
        align: string;
        className: null;
        active: boolean;
        onClickOutside: null;
    };
};
export default Dropdown;
