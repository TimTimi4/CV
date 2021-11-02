import styled from "styled-components";
import PageTemplate from "../../components/PageTemplate";
import MainTitle from "../../components/MainTitle";
import UnderLine from "../../components/Underline";
import ContactData from "../../components/ContactData";
import FormContact from "../../components/FormContact";
import ContactButton from "../../components/ContactButton";

const Wrapper = styled.div`
	margin: 0px 0px 50px 84px;
	font-size: 14px;
`
const StyledRow = styled.div`
	display: flex;
	justify-content: space-between;
	div{
		&:first-child{
			flex: 0 1 50%;
		}
		&:last-child{
			flex: 0 1 50%;
		}
	}
`

const Contacts = () => {
	return(
		<PageTemplate>
			<Wrapper>
				<MainTitle>Contacts</MainTitle>
				<UnderLine/>
				<StyledRow>
					<div>
						<FormContact></FormContact>
						<ContactButton link={"http://t.me/timothytimi4"}>Chat with Telegram</ContactButton>
						<ContactButton link={"https://github.com/TimTimi4/"}>GitHub</ContactButton>
					</div>
					<div>
						<ContactData/>
					</div>
				</StyledRow>
			</Wrapper>
		</PageTemplate>
	);
}

export default Contacts