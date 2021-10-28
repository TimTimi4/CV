import styled from "styled-components";
import LinkIcon from "../../img/link-icon.png"


const StyledLink = styled.a`
text-decoration:none;
color: #51C0DA;
font-size: 12px;
font-weight: 700;
img{
	margin: 0px 8px 0px 0px;
}
`

const GitLink = ({children}) => {
	return(
		<StyledLink><img src={LinkIcon}/>{children}</StyledLink>
	)
}

export default GitLink