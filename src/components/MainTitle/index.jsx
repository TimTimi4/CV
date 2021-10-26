import styled from "styled-components";

const Title = styled.h2`
	font-family: ${props => props.theme.fonts.title};
	font-size: 40px;
	line-height: 40px;
`

const MainTitle = ({children, className}) => {
	return (
		<Title className={className}>{children}</Title>
	)
}

export default MainTitle