import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type AppProps = {
    children: React.ReactNode;
    iconsSprite: string | null;
};
declare const App: {
    (props: AppProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        iconsSprite: PropTypes.Validator<string>;
    };
};
export default App;
