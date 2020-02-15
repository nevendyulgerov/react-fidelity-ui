import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type TooltipProps = {
    align?: string;
    render: (onMouseEnter: (event: HTMLElement) => void, onMouseLeave: (event: HTMLElement) => void) => React.ReactNode;
};
declare const Tooltip: {
    ({ align, render }: TooltipProps): React.ReactNode;
    propTypes: {
        align: PropTypes.Requireable<string>;
        render: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        align: string;
    };
};
export default Tooltip;
