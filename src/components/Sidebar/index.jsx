import styled from 'styled-components'
import Avatar from '../Avatar'
import Menu from '../Menu'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sidebar};
  max-width: ${(props) => props.theme.sizes.blocks.sidebar};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
  &.active{
    display: block;
  }
  `

const Sidebar = () => (
  <Wrapper>
    <Avatar />
    <Menu />
  </Wrapper>
)

export default Sidebar
