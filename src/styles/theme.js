import { ThemeProvider } from 'styled-components'
import GlobalStyle from './global'

const theme = {
  colors: {
    primary: '#1C2628',
    bg: '#CFCFCF',
  },
  fonts: {
    primary: "'Lato', sans-serif;",
		title: "'Andada Pro', sans-serif;",
  },
	media: {
		mobileS: `(max-width: 320px)`,
		mobileM: `(max-width: 375px)`,
		mobileL: `(max-width: 425px)`,
		tablet: `(max-width: 768px)`,
		laptop: `(max-width: 1024px)`,
		laptopL: `(max-width: 1440px)`,
		desktop: `(max-width: 2560px)`,
	}
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme