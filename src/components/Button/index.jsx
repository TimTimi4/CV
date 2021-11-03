import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.button`
	min-width: ${props => props.theme.sizes.blocks.menubutton};
	max-width: ${props => props.theme.sizes.blocks.menubutton};
	display: block;
	border: 1px solid ${props => props.theme.colors.primary};
	box-sizing: border-box;
	border-radius: 6px;
	text-align: center;
	padding: 6px 0px 6px 0px;
	font-weight: 700;
	font-size: ${props => props.theme.sizes.fonts.secondaryText};
	background-color: transparent;
	cursor: pointer;
	&:hover{
		box-shadow: 0 0 5px 1px ${props => props.theme.colors.primary};
	}
	&:active{
		box-shadow: none;
		border: 1px solid ${props => props.theme.colors.secondary};
	}
`
const Button = ({children, onClick, type, link, className, disabled}) => {
	const buttonElement = (
		<Wrapper type={type || 'button'} onClick={onClick} className={className} disabled={disabled}>
			{children}
		</Wrapper>
	);
	return link
		? <NavLink to={link}>{buttonElement}</NavLink>
		: buttonElement
}

export default Button