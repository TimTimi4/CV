import styled from "styled-components";
import Avatar from "../Avatar";
import Menu from "../Menu";

const Wrapper = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: #E9DFD4;
	max-width: ${props => props.theme.sizes.blocks.sidebar};
	display: flex;
  flex-direction: column;
  align-items: center;
	`

const Sidebar = () => {
	return(
		<Wrapper>
			<Avatar/>
			<Menu/>
		</Wrapper>
	);
}

export default Sidebar