import styled from 'styled-components'
import PageTemplate from '../../components/PageTemplate'
import MainTitle from '../../components/MainTitle'
import UnderLine from '../../components/Underline'
import ItemProj from '../../components/ItemProj'
import { projects } from '../../data/projectData'

const Wrapper = styled.div`
  margin: 0px 0px 50px 84px;
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
`

const Projects = () => (
  <PageTemplate>
    <Wrapper>
      <MainTitle>My Projects</MainTitle>
      <UnderLine />
      {
        projects.map((item) => (
          <ItemProj
            key={item.id}
            src={item.src}
            title={item.title}
            text={item.text}
            gitlink={item.gitlink}
            link={item.id}
          />
        ))
        }
    </Wrapper>
  </PageTemplate>
)

export default Projects
