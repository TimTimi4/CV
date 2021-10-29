import styled from "styled-components";
import { projects } from "../../const/ProjectData";
import Subtitle from "../../components/SubTitle";
import ProjSlider from "../../components/ProjSlider";
import GitLink from "../../components/GitLink";

const Wrapper = styled.div`
padding: 30px 10px 10px 10px;`

const StyledSubtitle = styled(Subtitle)`
text-align: center;
`
const TextBLock = styled.div`
margin: 30px auto 0px auto;
font-size: 12px;
text-align: center;
max-width: 500px;
`
const StyledGitLink = styled(GitLink)`
font-size: 15px;
`

const ProjectInner = ({match}) => {
	const item = projects.find(p => p.id === match.params.projectId)
	return (
		<Wrapper>
			<StyledSubtitle>{item.title}</StyledSubtitle>
			<TextBLock>{item.desc}</TextBLock>
			<ProjSlider>{item}</ProjSlider>
			<StyledGitLink>{item.gitlink}</StyledGitLink>
		</Wrapper>
	)
}

export default ProjectInner

