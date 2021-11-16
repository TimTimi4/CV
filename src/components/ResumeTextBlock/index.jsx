import { StyledSubtitle, Text } from './styled'

const ResumeTextBlock = ({ title, firstLine, secondLine, thirdLine }) => (
  <div>
    <StyledSubtitle>{title}</StyledSubtitle>
    <Text>
      <p>{firstLine}</p>
      <p>{secondLine}</p>
      <p>{thirdLine}</p>
    </Text>
  </div>
)

export default ResumeTextBlock
