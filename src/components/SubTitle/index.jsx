import styled from "styled-components";

const StyledSubtitle = styled.div`
font-weight: 700;
font-size: 20px;
text-transform: uppercase;
color: ${props => props.theme.colors.primary};
margin: 40px 0px 20px 0px;
`

const Subtitle = ({children}) => {
	return (
		<StyledSubtitle>{children}</StyledSubtitle>
	)
}
export default Subtitle