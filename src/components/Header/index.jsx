import styled from 'styled-components'
import Burger from '../Burger'

const StyledHeader = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: none;
  @media ${({ theme }) => theme.media.tablet} {
    display: block;
  }
`
const Name = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.sizes.fonts.subtitle};
  font-family: ${(props) => props.theme.fonts.title};
`

const Header = () => (
  <StyledHeader>
    <Burger />
    <Name>Timur Doronin</Name>
  </StyledHeader>
)

export default Header
