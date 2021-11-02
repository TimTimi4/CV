import styled from "styled-components";
import UnderLine from "../../components/Underline";
import PageTemplate from "../../components/PageTemplate";
import MainTitle from "../../components/MainTitle";

const Wrapper = styled.div`
	margin: 0px 0px 50px 84px;
	font-size: 14px;
`
const StyledMainTitle = styled(MainTitle)`
	margin: 91px 0px 6px 0px;
`

const FirstTextBlock = styled.div`
	max-width: 650px;
	font-weight: 700;
	margin: 20px 15px 0px 10px;
`

const SecondTextBlock = styled.div`
	max-width: 650px;
	margin: 20px 15px 0px 10px;
	p {
		margin: 0px 0px 0px 0px;
	}
	ul{
		padding: 0px 0px 0px 20px;
		margin: 0px 0px 0px 0px;
		p{
			color: #A4A4A4;
		}
	}
`

const ThirdTextBlock = styled.div`
	max-width: 650px;
	margin: 20px 15px 0px 10px;
	p{
		margin: 0px 0px 0px 0px;
	}
`

const About = () => {
	return (
		<PageTemplate>
			<Wrapper>
				<StyledMainTitle>About Me</StyledMainTitle>
				<UnderLine />
				<FirstTextBlock>My name is Timur Doronin. I'm a junior front-end developer.</FirstTextBlock>
				<SecondTextBlock>
					<p>Before programming, I worked as mining engineer from 2018 to 2021.</p>
					<p>During this time, I held positions:</p>
					<ul>
						<li>Mining foreman (manager) at a gold mine in Siberia. Russian Federation, Irkutsk region, Mining enterprise "RETKON".
							<p>Provided control of the workflow and management of working personnel.</p></li>
						<li>Industrial engineering department specialist. Kyrgyz Republic, Bishkek, Mining enterprise «Vertex Gold Company», «Jamgyr» field. <p>Provided control of the technical production process.</p></li>
						<li>Mining project engineer. Project and Research Center "Ken-Too".
							<p>Project development for mining companies. Project supervision in production.</p></li>
					</ul>
				</SecondTextBlock>
				<ThirdTextBlock>
					<p>Since September 2020, I have been studying as a front-end developer. My mentor is an active front-end developer and a senior lecturer at the IT academy. During this time I studied HTML, СSS, Bootstrap, JavaScript, React.</p>
					<p>Took part in a hackathon to develop an educational website for children.</p>
					<p>Since April 2021, made responsive layouts for small business.</p>
				</ThirdTextBlock>
			</Wrapper>
		</PageTemplate>
	);
}

export default About