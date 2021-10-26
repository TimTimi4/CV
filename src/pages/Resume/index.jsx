import styled from "styled-components";
import PageTemplate from "../../components/PageTemplate";
import MainTitle from "../../components/MainTitle";

const Wrapper = styled.div`
margin: 0px 0px 0px 84px;
`
const UnderLine = styled.div`
	border-top: 1px solid #C4C4C4;
	width: 100%;
`
const StyledMainTitle = styled(MainTitle)`
margin: 91px 0px 6px 0px;
`


const Resume = () => {
	return(
		<PageTemplate>
			<Wrapper>
				<StyledMainTitle>My Resume</StyledMainTitle>
				<UnderLine/>
			</Wrapper>
		</PageTemplate>
	);
}

export default Resume