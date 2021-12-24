import PageTemplate from '../../components/PageTemplate'
import MainTitle from '../../components/MainTitle'
import UnderLine from '../../components/Underline'
import Skills from '../../components/Skills'
import ResumeTextBlock from '../../components/ResumeTextBlock'
import { Wrapper, Profile } from './styled'

const Resume = () => (
  <PageTemplate>
    <Wrapper>
      <MainTitle>My Resume</MainTitle>
      <UnderLine />
      <Profile>Junior front-end developer.
        I approach my work responsibly and strive to write good code, not just working one.
        I want to participate in the implementation of cool projects,
        contribute and develop my skills.
      </Profile>
      <Skills />
      <ResumeTextBlock
        title="Expierence"
        firstLine="02/2021 - Present time "
        secondLine="Freelance Frontend Developer "
        thirdLine="Making responsive layouts for small business"
      />
      <ResumeTextBlock
        title="Education"
        firstLine="2011 - 2017 Kyrgyz-Russian Slavic University"
        secondLine="Mining Engineer"
      />
    </Wrapper>
  </PageTemplate>
)

export default Resume
