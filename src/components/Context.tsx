import { createContext } from 'react';

export type InitialContextType = {
  iconsSprite: string | null
};

export const initialContext: InitialContextType = {
  iconsSprite: null
};

const ThemeContext = createContext(initialContext);

export default ThemeContext;
