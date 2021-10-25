import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Wrapper = styled.div`
max-width: 182px;
background: #E9DFD4;
border: 1px solid #FE8158;
box-sizing: border-box;
border-radius: 6px;
text-align: center;
padding: 6px 0px 6px 0px;
margin: 7px auto 7px auto;
font-weight: 700;
font-size: 12px;
&:active{
	border: 1px solid #51C0DA;
}
`

const Button = ({children, onClick, type, link}) => {
	const buttonElement = (
		<Wrapper type={type || 'button'} onClick={onClick}>
			{children}
		</Wrapper>
	);
	return link
		? <NavLink to={link}>{buttonElement}</NavLink>
		: buttonElement
}

export default Button