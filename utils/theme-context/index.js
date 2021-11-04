import { createContext, useContext,useState } from 'react';
import { thememap } from '../theme-map';
const ThemeContext = createContext();


export function ThemeWrapper({ children }) {
  const [theme, setTheme] = useState(thememap["default"]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
