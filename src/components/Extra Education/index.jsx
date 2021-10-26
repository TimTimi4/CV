import styled from "styled-components";
import Subtitle from "../SubTitle";

const Text = styled.div`
	margin: 0px 15px 0px 10px; 
p{
	margin: 0px 0px 0px 0px;
	font-size: 14px;
	&:last-child{
		font-weight: 700;
	}
}
`
const ExtraEducation = () => {
	return (
		<div>
			<Subtitle>Extra Education</Subtitle>
			<Text>
				<div>
					<p>2011 - 2017 Kyrgyz-Russian Slavic University </p>
					<p>Mining Engineer</p>
				</div>
				<div>
					<p>2011 - 2017 Kyrgyz-Russian Slavic University </p>
					<p>Mining Engineer</p>
				</div>
			</Text>
		</div>
	)
}
export default ExtraEducation