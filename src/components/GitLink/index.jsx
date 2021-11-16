import { StyledLink, LinkIcon } from './styled'

const GitLink = ({ children }) => (
  <StyledLink href={children}><LinkIcon />{children}</StyledLink>
)

export default GitLink
