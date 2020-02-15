import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type CardProps = {
    children: React.ReactNode;
    paddingSize: string | null;
    className?: string | null;
    hovered?: boolean;
    padded?: boolean;
    loading?: boolean;
    bordered?: boolean;
    flat?: boolean;
    rounded?: boolean;
    [key: string]: any;
};
declare const Card: {
    (props: CardProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        paddingSize: PropTypes.Requireable<string | null>;
        className: PropTypes.Requireable<string>;
        hovered: PropTypes.Requireable<boolean>;
        padded: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        bordered: PropTypes.Requireable<boolean>;
        flat: PropTypes.Requireable<boolean>;
        rounded: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        paddingSize: null;
        className: null;
        hovered: boolean;
        padded: boolean;
        loading: boolean;
        bordered: boolean;
        flat: boolean;
        rounded: boolean;
    };
};
export default Card;
