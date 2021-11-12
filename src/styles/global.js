import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    background-color: ${({ theme }) => theme.colors.bg};
  }
  button {
    -webkit-tap-highlight-color: transparent;
    font-family: ${({ theme }) => theme.fonts.primary};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle
