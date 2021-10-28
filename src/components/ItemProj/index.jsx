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
border: 5px solid #51C0DA;
img{
	position: absolute;
	-o-object-fit: cover;
	object-fit: cover;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	}
&:hover{
	cursor: pointer;
	border: 5px solid #FE8158;
}
`

const Description = styled.div`
flex: 0 1 58%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
font-size: 12px;
`

const ItemProj = ({text, title,src, gitlink, link, onClick}) => {
	const project = (
		<Wrapper>
			<Img><img src={src} onClick={onClick}/></Img>
			<Description>
				<Subtitle>{title}</Subtitle>
				<div>{text}</div>
				<GitLink>{gitlink}</GitLink>
			</Description>
		</Wrapper>
	)
	return link
		? <NavLink to={link}>{project}</NavLink>
		: {project}
}

export default ItemProj