import styled from "styled-components";

const StyledSubtitle = styled.div`
	font-weight: 700;
	font-size: 20px;
	text-transform: uppercase;
	color: ${props => props.theme.colors.primary};
`

const Subtitle = ({children, className}) => {
	return (
		<StyledSubtitle className={className}>{children}</StyledSubtitle>
	)
}
export default Subtitle


