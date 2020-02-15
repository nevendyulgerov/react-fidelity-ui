import * as React from 'react';
import * as PropTypes from 'prop-types';
import Context from './Context';

export type AppProps = {
  children: React.ReactNode,
  iconsSprite: string | null
};

const App = (props: AppProps) => {
  const { children, iconsSprite } = props;

  return (
    <Context.Provider
      value={{
        iconsSprite
      }}
    >
      <div className="fidelity-ui-app">
        {children}
      </div>
    </Context.Provider>
  );
};

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  iconsSprite: PropTypes.string.isRequired
};

export default App;
