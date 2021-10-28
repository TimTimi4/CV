import styled from "styled-components";

const StyledMainTitle = styled.h2`
	font-family: ${props => props.theme.fonts.title};
	font-size: 40px;
	line-height: 40px;
	margin: 91px 0px 6px 0px;
`

const MainTitle = ({children, className}) => {
	return (
		<StyledMainTitle className={className}>{children}</StyledMainTitle>
	)
}

export default MainTitle