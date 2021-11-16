import { StyledBurger } from './styled'

const Burger = ({ onClick }) => (
  <StyledBurger onClick={onClick}>
    <span />
    <span />
    <span />
  </StyledBurger>
)

export default Burger
