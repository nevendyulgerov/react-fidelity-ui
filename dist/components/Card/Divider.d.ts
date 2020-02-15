/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type CardDividerProps = {
    className?: string | null;
    [key: string]: any;
};
declare const CardDivider: {
    ({ className, ...restProps }: CardDividerProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        className: null;
    };
};
export default CardDivider;
