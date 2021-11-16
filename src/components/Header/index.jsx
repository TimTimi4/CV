import { StyledHeader, Name, Job } from './styled'
import Burger from '../Burger'

const Header = ({ onBurgerClick }) => (
  <StyledHeader>
    <Burger onClick={onBurgerClick} />
    <Name>Timur Doronin</Name>
    <Job>Front-end Developer</Job>
  </StyledHeader>
)

export default Header
