import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type CollapseProps = {
    children: React.ReactNode;
    className?: string | null;
    active?: boolean;
    [key: string]: any;
};
declare const Collapse: {
    (props: CollapseProps): JSX.Element;
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
export default Collapse;
