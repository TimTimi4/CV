import styled from 'styled-components'

const StyledButton = styled.a`
  max-width: ${({ theme }) => theme.sizes.blocks.contactbutton};
  display: block;
  border: 1px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 6px;
  text-align: center;
  height: ${(props) => props.theme.sizes.elems.menuButtonHeight};
  font-weight: 700;
  font-size: ${(props) => props.theme.sizes.fonts.secondaryText};
  background-color: transparent;
  cursor: pointer;
  &:active{
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`

const ContactButton = ({ children, link, className }) => (
  <StyledButton href={link} className={className}>{children}</StyledButton>
)

export default ContactButton
