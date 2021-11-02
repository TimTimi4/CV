import styled from "styled-components";
import Subtitle from "../SubTitle";

const Text = styled.div`
	margin: 0px 15px 0px 10px; 
	p {
		margin: 0px 0px 0px 0px;
		font-size: 14px;
		&:last-child{
			font-weight: 700;
		}
	}
`
const StyledSubtitle = styled(Subtitle)`
	margin: 40px 0px 20px 0px;
`

const Education = () => {
	return (
		<div>
			<StyledSubtitle>Education</StyledSubtitle>
			<Text>
				<p>2011 - 2017 Kyrgyz-Russian Slavic University </p>
				<p>Mining Engineer</p>
			</Text>
		</div>
	)
}

export default Education