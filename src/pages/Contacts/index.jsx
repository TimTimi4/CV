import styled from "styled-components";
import PageTemplate from "../../components/PageTemplate";
import MainTitle from "../../components/MainTitle";
import UnderLine from "../../components/Underline";
import ContactData from "../../components/ContactData";
import FormContact from "../../components/FormContact";

const Wrapper = styled.div`
margin: 0px 0px 50px 84px;
font-size: 14px;
`

const Contacts = () => {
	return(
		<PageTemplate>
			<Wrapper>
				<MainTitle>Contacts</MainTitle>
				<UnderLine/>
				<FormContact></FormContact>
				<ContactData/>
			</Wrapper>
		</PageTemplate>
	);
}

export default Contacts