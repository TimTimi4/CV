import styled from "styled-components";
import { projects } from "../../const/ProjectData";
import Subtitle from "../../components/SubTitle";

const Wrapper = styled.div``

const ProjectInner = ({match}) => {
	const item = projects.find(p => p.id === match.params.projectId)
	return (
		<Wrapper>
			<Subtitle>{item.title}</Subtitle>
			<Subtitle>{item.text}</Subtitle>
			{item.desc}
		</Wrapper>

	)
}

export default ProjectInner