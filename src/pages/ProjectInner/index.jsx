import styled from "styled-components";
import { projects } from "../../Data/project-data";
import Subtitle from "../../components/SubTitle";
import ProjSlider from "../../components/ProjSlider";
import GitLink from "../../components/GitLink";

const Wrapper = styled.div`
	padding: 30px 10px 10px 10px;`

const StyledSubtitle = styled(Subtitle)`
	text-align: center;
	color: #51C0DA;
	&:hover{
		transition: none;
	}
`
const TextBLock = styled.div`
	margin: 30px auto 0px auto;
	font-size: 14px;
	text-align: start;
	max-width: 700px;
	line-height: 20px;
`
const StyledGitLink = styled(GitLink)`
	font-size: 14px;
`

const ProjectInner = ({match}) => {
	const item = projects.find(p => p.id === match.params.projectId)
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

