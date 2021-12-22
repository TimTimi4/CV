import UnderLine from '../../components/Underline'
import PageTemplate from '../../components/PageTemplate'
import {
  Wrapper,
  StyledMainTitle,
  FirstTextBlock,
  SecondTextBlock,
  ThirdTextBlock,
} from './styled'

const About = () => (
  <PageTemplate>
    <Wrapper>
      <StyledMainTitle>About Me</StyledMainTitle>
      <UnderLine />
      <FirstTextBlock>My name is Timur Doronin.
        I&apos;m a junior front-end developer.
      </FirstTextBlock>
      <SecondTextBlock>
        <p>Before programming, I worked as mining engineer from 2018 to 2021.</p>
        <p>During this time, I held positions:</p>
        <ul>
          <li>Mining foreman (manager) at a gold mine in Siberia.
            Russian Federation, Irkutsk region, Mining enterprise &apos;RETKON&apos;.
            <p>Provided control of the workflow and management of working personnel.</p>
          </li>
          <li>Industrial engineering department specialist.
            Kyrgyz Republic, Bishkek, Mining enterprise «Vertex Gold Company», «Jamgyr» field.
            <p>Provided control of the technical production process.</p>
          </li>
          <li>Mining project engineer. Project and Research Center &apos;Ken-Too&apos;.
            <p>Project development for mining companies. Project supervision in production.</p>
          </li>
        </ul>
      </SecondTextBlock>
      <ThirdTextBlock>
        <p>Since September 2020, I have been studying as a front-end developer.
          My mentor is an active front-end developer and a senior lecturer at the IT academy.
          During this time I studied HTML, СSS, Bootstrap, JavaScript, React.
        </p>
        <p>Took part in a hackathon to develop an educational website for children.</p>
        <p>Since April 2021, have making responsive layouts for small business.</p>
      </ThirdTextBlock>
    </Wrapper>
  </PageTemplate>
)

export default About
