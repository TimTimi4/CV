import styled from 'styled-components'
import Link from '../Icons/Link'

const StyledLink = styled.a`
  text-decoration:none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
  font-weight: 700;
`

const LinkIcon = styled(Link)`
  margin: 0px 4px 0px 0px;
`

const GitLink = ({ children }) => (
  <StyledLink href={children}><LinkIcon />{children}</StyledLink>
)

export default GitLink
