import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Montserrat;
    font-size: 16px;
  }
`

export const darkTheme = {
    text: '#fff',
    bg1: '#0d1117',
    bg2: '#141a22f5',
    bgFooter: '#0d1117',
};

export const lightTheme = {
    text: '#1c1c1c',
    bg1: '#F2F2F2',
    bg2: '#FFFFFF',
    bgFooter: '#001B34',
}