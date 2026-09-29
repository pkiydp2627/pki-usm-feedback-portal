import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  useEffect(() => {
    // Ensure dark class is completely removed and light theme is fixed
    const root = window.document.documentElement;
    root.classList.remove('dark');
    window.localStorage.setItem('pki-theme', 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
