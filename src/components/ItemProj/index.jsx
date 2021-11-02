import styled from "styled-components";
import GitLink from "../GitLink";
import Subtitle from "../SubTitle";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 40px 0px 0px 0px;
	max-width: 700px;
`

const Img = styled.div`
	flex: 0 1 35%;
	padding: 0px 0px 18% 0px;
	position: relative;
	background-color: #fff;
	overflow: hidden;
	border: 2px solid #51C0DA;
	img{
		position: absolute;
		-o-object-fit: cover;
		object-fit: cover;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		}
`

const Description = styled.div`
	flex: 0 1 58%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	font-size: 14px;
`
const StyledSubtitle = styled(Subtitle)`
	&:hover{
		transition: all 0.2s ease 0s;
		color: #51C0DA;
	}
`

const ItemProj = ({ text, title, src, gitlink, link }) => {
	return (
		<Wrapper>
			<Img><img src={src}/></Img>
			<Description>
				<NavLink to={`/projects/${link}`}><StyledSubtitle>{title}</StyledSubtitle></NavLink>
				<div>{text}</div>
				<GitLink>{gitlink}</GitLink>
			</Description>
		</Wrapper>
	)
}

export default ItemProj