import { Wrapper } from "./sections"
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState, useEffect } from "react";
import React from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
const darkTheme = {
  title: '#fff',
  bg: '#555050'
};

const lightTheme = {
  title: '#1c1c1c',
  bg: '#F2F2F2'
}

interface Theme {
  title: string;
}

export const ThemeContext = React.createContext<{ theme: string; toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => { },
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
    localStorage.setItem('theme', currentTheme || 'light');
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
