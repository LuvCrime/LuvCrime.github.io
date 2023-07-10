import { Wrapper } from "./sections"
import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from "react"
import React from "react"

import { GlobalStyle, lightTheme, darkTheme } from './theme/styles'

export const ThemeContext = React.createContext<{ theme: string; toggleTheme: () => void }>({
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(localStorage.getItem('theme'));

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'theme') {
        setCurrentTheme(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme: currentTheme === 'dark' ? 'dark' : 'light', toggleTheme }}>
        <Wrapper />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
