import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div `
	max-width: 190px;
	margin: 51px auto 0 auto;
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
				<Button link={item.route} key={item.id}>{item.text}</Button>
			))
			}
		</Wrapper>
	);
}

export default Menu