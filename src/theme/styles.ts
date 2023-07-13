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
    bg: '#555050'
};

export const lightTheme = {
    text: '#1c1c1c',
    bg: '#F2F2F2'
}