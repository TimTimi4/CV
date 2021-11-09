import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div `
	margin: 51px auto 0 auto;
`
const StyledButton = styled(Button)`
	&:first-child{
		margin: 0px 0px ${({theme}) => theme.sizes.elems.menuButtonMargin} 0px;
	}
`

const menu = [
  { id: 1, text: 'About', route: '/' },
  { id: 2, text: 'Resume', route: '/resume' },
  { id: 3, text: 'Projects', route: '/projects' },
  { id: 4, text: 'Contacts', route: '/contacts' },
]

const Menu = () => {
	return(
		<Wrapper>
			{
			menu.map(item => (
				<StyledButton link={item.route} key={item.id}>{item.text}</StyledButton>
			))
			}
		</Wrapper>
	);
}

export default Menu