import { StyledSubtitle } from './styled'
import ProgressBar from '../ProgressBar'

const skills = [
  { id: 1, width: '95%', text: 'HTML' },
  { id: 2, width: '95%', text: 'CSS' },
  { id: 3, width: '90%', text: 'Bootstrap' },
  { id: 4, width: '70%', text: 'JavaScript' },
  { id: 5, width: '80%', text: 'React' },
]

const Skills = () => (
  <div>
    <StyledSubtitle>SKILLS</StyledSubtitle>
    {
        skills.map((item) => (
          <ProgressBar key={item.id} width={item.width} text={item.text} />
        ))
      }
  </div>
)
export default Skills
