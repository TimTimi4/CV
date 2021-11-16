import { StyledButton } from './styled'

const ContactButton = ({ children, link, className }) => (
  <StyledButton href={link} className={className}>{children}</StyledButton>
)

export default ContactButton
