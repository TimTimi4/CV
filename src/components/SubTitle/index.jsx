import styled from "styled-components";

const StyledSubtitle = styled.div`
	font-weight: 700;
	font-size: ${props=>props.theme.sizes.fonts.subtitle};
	text-transform: uppercase;
	color: ${props => props.theme.colors.primaryText};
`

const Subtitle = ({children, className}) => {
	return (
		<StyledSubtitle className={className}>{children}</StyledSubtitle>
	)
}
export default Subtitle


