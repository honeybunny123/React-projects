import { createContext } from 'react';

export const themes = {
  light: {
    color: '#181818',
    bg: 'lightgrey'
  },
  dark: {
    color: 'lightgrey',
    bg: '#181818'
  }
}

export const ThemeContext = createContext(themes.dark)


