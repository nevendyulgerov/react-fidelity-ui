/// <reference types="react" />
import * as PropTypes from 'prop-types';
export declare type IconProps = {
    id: string;
    size?: number | null;
    className?: string | null;
    rotate?: number | null;
    rounded?: boolean;
    spinning?: boolean;
    [key: string]: any;
};
declare const Icon: {
    (props: IconProps): JSX.Element | null;
    propTypes: {
        id: PropTypes.Validator<string>;
        size: PropTypes.Requireable<number>;
        rotate: PropTypes.Requireable<number>;
        className: PropTypes.Requireable<string>;
        rounded: PropTypes.Requireable<boolean>;
        spinning: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        size: null;
        rotate: null;
        className: null;
        rounded: boolean;
        spinning: boolean;
    };
};
export default Icon;
