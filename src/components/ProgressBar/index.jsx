import { Text, ProgressBarBorder, ProgressBarInner } from './styled'

const ProgressBar = ({ text, width }) => (
  <div>
    <Text>
      <p>{text}</p>
      <p>{width}</p>
    </Text>
    <ProgressBarBorder>
      <ProgressBarInner width={width} />
    </ProgressBarBorder>
  </div>

)
export default ProgressBar
