import styled from "styled-components";
import Sidebar from "../Sidebar";

const Wrapper = styled.div`
	display: flex;
`

const Content = styled.div `
	flex: 0 1 100%;
	margin: 0px 0px 0px 220px;
`

const PageTemplate = ({children}) => {
	return(
		<Wrapper>
			<Sidebar/>
			<Content>{children}</Content>
		</Wrapper>

	);
}

export default PageTemplate