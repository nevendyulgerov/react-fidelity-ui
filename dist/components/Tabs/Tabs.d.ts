import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type TabsProps = {
    children: React.ReactNode;
    className?: string | null;
    align?: string;
    basic?: boolean;
    bordered?: boolean;
};
declare const Tabs: {
    (props: TabsProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        align: PropTypes.Requireable<string>;
        basic: PropTypes.Requireable<boolean>;
        bordered: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        className: null;
        align: string;
        basic: boolean;
        bordered: boolean;
    };
};
export default Tabs;
