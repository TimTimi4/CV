import { Wrapper, ActiveNavLink } from './styled'

const Button = ({ children, type, link, onClick, className, disabled }) => {
  const buttonElement = (
    <Wrapper type={type || 'button'} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </Wrapper>
  )
  return link
    ? <ActiveNavLink exact activeClassName="active" to={link}>{buttonElement}</ActiveNavLink>
    : buttonElement
}

export default Button
