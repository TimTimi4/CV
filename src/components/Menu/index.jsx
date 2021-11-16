import { Wrapper, StyledButton } from './styled'

const menu = [
  { id: 1, text: 'About', route: '/' },
  { id: 2, text: 'Resume', route: '/resume' },
  { id: 3, text: 'Projects', route: '/projects' },
  { id: 4, text: 'Contacts', route: '/contacts' },
]

const Menu = () => (
  <Wrapper>
    {
      menu.map((item) => (
        <StyledButton link={item.route} key={item.id}>{item.text}</StyledButton>
      ))
      }
  </Wrapper>
)

export default Menu
