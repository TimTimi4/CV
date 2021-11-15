import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import GitLink from '../GitLink'
import Subtitle from '../SubTitle'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 0px 0px;
  max-width: ${({ theme }) => theme.sizes.blocks.primary};
`

const Img = styled.div`
  flex: 0 1 35%;
  padding: 0px 0px 18% 0px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  img{
    position: absolute;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    }
`

const Description = styled.div`
  flex: 0 1 58%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
`
const StyledSubtitle = styled(Subtitle)`
  &:hover{
    transition: all 0.2s ease 0s;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const ItemProj = ({ text, title, src, gitlink, link }) => (
  <Wrapper>
    <Img><img src={src} alt="slides" /></Img>
    <Description>
      <NavLink to={`/projects/${link}`}><StyledSubtitle>{title}</StyledSubtitle></NavLink>
      <div>{text}</div>
      <GitLink>{gitlink}</GitLink>
    </Description>
  </Wrapper>
)

export default ItemProj
