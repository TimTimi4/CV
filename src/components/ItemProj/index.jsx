import { NavLink } from 'react-router-dom'
import GitLink from '../GitLink'
import {
  Wrapper,
  ImageContainer,
  Description,
  StyledSubtitle } from './styled'

const ItemProj = ({ text, title, src, gitlink, link }) => (
  <Wrapper>
    <ImageContainer>
      <img src={src} alt="slides" />
    </ImageContainer>
    <Description>
      <NavLink to={`/projects/${link}`}><StyledSubtitle>{title}</StyledSubtitle></NavLink>
      <div>{text}</div>
      <GitLink>{gitlink}</GitLink>
    </Description>
  </Wrapper>
)

export default ItemProj
