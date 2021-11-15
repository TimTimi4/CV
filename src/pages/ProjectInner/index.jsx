import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { projects } from '../../data/projectData'
import Subtitle from '../../components/SubTitle'
import ProjectSlider from '../../components/ProjectSlider'
import GitLink from '../../components/GitLink'
import PageTemplate from '../../components/PageTemplate'

const Wrapper = styled.div`
  padding: 30px 10px 10px 10px;
  `

const StyledSubtitle = styled(Subtitle)`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  &:hover{
    transition: none;
  }
`
const TextBLock = styled.div`
  margin: 30px auto 0px auto;
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
  text-align: start;
  max-width: ${({ theme }) => theme.sizes.blocks.primary};
  line-height: 20px;
`
const StyledGitLink = styled(GitLink)`
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
`

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
