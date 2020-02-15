import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type AnimationProps = {
    children: React.ReactNode;
    type?: string | null;
    className?: string | null;
    infinite?: boolean;
    onComplete: (event: AnimationEvent) => EventListenerOrEventListenerObject;
    [key: string]: any;
};
declare const Animation: {
    (props: AnimationProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        type: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        infinite: PropTypes.Requireable<boolean>;
        onComplete: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        type: string;
        className: null;
        infinite: boolean;
        onComplete: () => void;
    };
};
export default Animation;
