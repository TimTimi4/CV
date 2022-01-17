import { StyledSubtitle } from './styled'
import ProgressBar from '../ProgressBar'

const skills = [
  { id: 1, width: '90%', text: 'HTML' },
  { id: 2, width: '90%', text: 'CSS' },
  { id: 3, width: '90%', text: 'Bootstrap' },
  { id: 4, width: '70%', text: 'JavaScript' },
  { id: 5, width: '80%', text: 'React' },
  { id: 6, width: '70%', text: 'Redux' },
  { id: 7, width: '70%', text: 'Material-UI' },
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
