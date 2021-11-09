import styled from "styled-components";
import { NavLink} from "react-router-dom";

const Wrapper = styled.button`
	min-width: ${props => props.theme.sizes.blocks.menubutton};
	display: block;
	border: 1px solid ${props => props.theme.colors.primary};
	box-sizing: border-box;
	border-radius: 6px;
	text-align: center;
	height: ${props => props.theme.sizes.elems.menuButtonHeight};
	font-weight: 700;
	font-size: ${props => props.theme.sizes.fonts.secondaryText};
	background-color: transparent;
	cursor: pointer;
	&:active{
		border: 1px solid ${props => props.theme.colors.secondary};
	}
`
const ActiveNavLink = styled(NavLink)`
	display: block;
	&.active > button {
		border: 1px solid ${({ theme }) => theme.colors.secondary};
	}
`;

const Button = ({children, type, link, onClick, className, disabled}) => {
	const buttonElement = (
		<Wrapper type={type || 'button'} onClick={onClick} className={className} disabled={disabled}>
			{children}
		</Wrapper>
	);
	return link
		? <ActiveNavLink exact activeClassName="active" to={link}>{buttonElement}</ActiveNavLink>
		: buttonElement
}

export default Button