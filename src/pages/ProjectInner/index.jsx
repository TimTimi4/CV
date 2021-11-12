import styled from 'styled-components'
import { projects } from '../../data/project-data'
import Subtitle from '../../components/SubTitle'
import ProjSlider from '../../components/ProjSlider'
import GitLink from '../../components/GitLink'

const Wrapper = styled.div`
  padding: 30px 10px 10px 10px;`

const StyledSubtitle = styled(Subtitle)`
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
  &:hover{
    transition: none;
  }
`
const TextBLock = styled.div`
  margin: 30px auto 0px auto;
  font-size: ${(props) => props.theme.sizes.fonts.primaryText};
  text-align: start;
  max-width: ${(props) => props.theme.sizes.blocks.primary};
  line-height: 20px;
`
const StyledGitLink = styled(GitLink)`
  font-size: ${(props) => props.theme.sizes.fonts.primaryText};
`

const ProjectInner = ({ match }) => {
  const item = projects.find((p) => p.id === match.params.projectId)
  return (
    <Wrapper>
      <StyledSubtitle>{item.title}</StyledSubtitle>
      <TextBLock>{item.desc}
        <br />
        <StyledGitLink>{item.gitlink}</StyledGitLink>
      </TextBLock>
      <ProjSlider>{item}</ProjSlider>
    </Wrapper>
  )
}

export default ProjectInner
