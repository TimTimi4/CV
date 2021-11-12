import styled from 'styled-components'

const StyledMainTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.sizes.fonts.mainTitle};
  line-height: 40px;
  margin: 91px 0px 6px 0px;
`

const MainTitle = ({ children, className }) => (
  <StyledMainTitle className={className}>{children}</StyledMainTitle>
)

export default MainTitle
