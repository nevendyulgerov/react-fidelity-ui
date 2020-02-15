import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type SidebarItemProps = {
    className?: string | null;
    active?: boolean;
    renderItem: (className: string) => React.ReactNode;
};
declare const SidebarItem: {
    (props: SidebarItemProps): React.ReactNode;
    propTypes: {
        className: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<boolean>;
        renderItem: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        className: null;
        active: boolean;
        renderItem: () => void;
    };
};
export default SidebarItem;
