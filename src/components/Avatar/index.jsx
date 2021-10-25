import styled from "styled-components";
import photo from "../../img/photo.jpg";

const Wrapper = styled.div `
	max-width: 150px;
	margin: 65px auto 0px auto;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`

const OrangeSircle = styled.div `
position: absolute;
z-index: 2;
right: 17px;
top: -12px;
width: 35px;
height: 35px;
background: #FE8158;
border-radius: 50%;
`

const BlueSircle = styled.div `
position: absolute;
z-index: 2;
left: 5px;
top: 60px;
width: 22px;
height: 22px;
background: #51C0DA;
border-radius: 50%;
`


const Img = styled.div `
margin: 0px auto 0px auto;
	width: 110px;
	height: 110px;
	border-radius: 50%;
	position: relative;
	background-color: #fff;
	overflow: hidden;
	img{
		position: absolute;
		-o-object-fit: cover;
		object-fit: cover;
		width: 90%;
		height: 100%;
		top: 12px;
		left: 5px;
		transform: scale(0.8);
		}
`

const Name = styled.div `
	p {
		&:first-child{
			margin: 9px 0px 0px 0px;
			font-size: 20px;
			font-family: ${props => props.theme.fonts.title};
		}
		&:last-child{
			margin: 0px 0px 0px 0px;
			font-size: 12px;
		}
	}
`

const Avatar = () => {
	return(
		<Wrapper>
			<OrangeSircle/>
			<BlueSircle/>
			<Img><img src={photo}/></Img>
			<Name>
				<p>Timur Doronin</p>
				<p>Frontend Developer</p>
			</Name>
		</Wrapper>
	);
}

export default Avatar