import styled from 'styled-components'

const StyledSubtitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.fonts.subtitle};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryText};
`

const Subtitle = ({ children, className }) => (
  <StyledSubtitle className={className}>{children}</StyledSubtitle>
)
export default Subtitle
