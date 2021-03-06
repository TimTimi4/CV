import { ThemeProvider } from 'styled-components'
import GlobalStyle from './global'

const theme = {
  colors:
    {
      primary: '#FE8158',
      secondary: '#51C0DA',
      primaryText: '#1C2628',
      bg: '#F6F5F0',
      secondaryText: '#A4A4A4',
      additionalText: '#676767',
      slider: {
        arrow: '#A4A4A4',
        dots: '#A4A4A4',
      },
      sidebarBg: '#E9DFD4',
      burger: '#676767',
    },
  sizes:
    {
      blocks:
        {
          sidebar: '220px',
          avatar: '110px',
          primary: '700px',
          progressbar: '380px',
          menubutton: '182px',
          formInput: '350px',
          formTextarea: '450px',
          secondary: '650px',
          contactbutton: '270px',
        },
      elems:
        {
          menuButtonHeight: '34px',
          menuButtonMargin: '16px',
        },
      fonts:
        {
          primaryText: '16px',
          secondaryText: '14px',
          mainTitle: '40px',
          subtitle: '20px',
          contactsAdditional: '16px',
        },
    },
  fonts:
    {
      primary: "'Lato', sans-serif;",
      title: "'Andada Pro', sans-serif;",
    },
  media:
    {
      mobileS: '(max-width: 320px)',
      mobileM: '(max-width: 375px)',
      mobileL: '(max-width: 425px)',
      tablet: '(max-width: 768px)',
      laptop: '(max-width: 1024px)',
      laptopL: '(max-width: 1440px)',
      desktop: '(max-width: 2560px)',
    },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
