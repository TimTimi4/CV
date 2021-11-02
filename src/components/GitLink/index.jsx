import styled from "styled-components";
import Link from "../Icons/Link";

const StyledLink = styled.a`
	text-decoration:none;
	color: #51C0DA;
	font-size: 12px;
	font-weight: 700;
`

const LinkIcon = styled(Link)`
	margin: 0px 4px 0px 0px;
`

const GitLink = ({children}) => {
	return(
		<StyledLink href={children}><LinkIcon/>{children}</StyledLink>
	)
}

export default GitLink