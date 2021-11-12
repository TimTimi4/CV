import styled from 'styled-components'
import Subtitle from '../SubTitle'

const Text = styled.div`
  margin: 0px 15px 0px 10px; 
  p{
    margin: 0px 0px 0px 0px;
    font-size: ${(props) => props.theme.sizes.fonts.primaryText};
    &:nth-child(2){
      font-weight: 700;
    }
    &:last-child{
      margin: 6px 0px 0px 0px;
      color:${(props) => props.theme.colors.secondaryText};
      font-weight: 700;
    }
  }
`
const StyledSubtitle = styled(Subtitle)`
  margin: 40px 0px 20px 0px;
`

const Experience = () => (
  <div>
    <StyledSubtitle>Experience</StyledSubtitle>
    <Text>
      <p>03/2021 - Present time</p>
      <p>Freelance Frontend Developer</p>
      <p>Made responsive layouts for small business</p>
    </Text>
  </div>
)

export default Experience
