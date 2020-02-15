import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type TabsItemProps = {
    children: React.ReactNode;
    className?: string | null;
    active?: boolean;
};
declare const Tab: {
    (props: TabsItemProps): JSX.Element;
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
export default Tab;
