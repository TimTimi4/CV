import { Redirect } from 'react-router-dom'
import { projects } from '../../data/projectData'
import ProjectSlider from '../../components/ProjectSlider'
import PageTemplate from '../../components/PageTemplate'
import {
  Wrapper,
  StyledSubtitle,
  TextBLock,
  StyledGitLink,
} from './styled'

const ProjectInner = ({ match }) => {
  const project = projects.find((p) => p.id === match.params.projectId)
  if (!project) return <Redirect to="/404" />
  const { title, desc, gitlink, slides } = project
  return (
    <PageTemplate>
      <Wrapper>
        <StyledSubtitle>{title}</StyledSubtitle>
        <TextBLock>{desc}
          <br />
          <StyledGitLink>{gitlink}</StyledGitLink>
        </TextBLock>
        <ProjectSlider slides={slides} />
      </Wrapper>
    </PageTemplate>
  )
}

export default ProjectInner
