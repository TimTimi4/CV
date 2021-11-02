import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.button`
	max-width: 182px;
	min-width: 182px;
	display: block;
	border: 1px solid #FE8158;
	box-sizing: border-box;
	border-radius: 6px;
	text-align: center;
	padding: 6px 0px 6px 0px;
	font-weight: 700;
	font-size: 12px;
	background-color: transparent;
	cursor: pointer;
	&:hover{
		box-shadow: 0 0 5px 1px rgba(254, 129, 88, 1);
	}
	&:active{
		box-shadow: none;
		border: 1px solid #51C0DA;
	}
`
const Button = ({children, onClick, type, link, className}) => {
	const buttonElement = (
		<Wrapper type={type || 'button'} onClick={onClick} className={className}>
			{children}
		</Wrapper>
	);
	return link
		? <NavLink to={link}>{buttonElement}</NavLink>
		: buttonElement
}

export default Button