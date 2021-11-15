import styled from 'styled-components'

const StyledMainTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.sizes.fonts.mainTitle};
  line-height: 40px;
  margin: 91px 0px 6px 0px;
`

const MainTitle = ({ children, className }) => (
  <StyledMainTitle className={className}>{children}</StyledMainTitle>
)

export default MainTitle
