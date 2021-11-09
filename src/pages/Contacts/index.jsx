import styled from "styled-components";
import PageTemplate from "../../components/PageTemplate";
import MainTitle from "../../components/MainTitle";
import UnderLine from "../../components/Underline";
import ContactData from "../../components/ContactData";
import FormContact from "../../components/FormContact";
import Telegram from "../../components/Icons/Telegram";
import GitIcon from "../../components/Icons/Git";
import ContactButton from "../../components/ContactButton";

const Wrapper = styled.div`
	margin: 0px 0px 50px 84px;
	font-size: ${props => props.theme.sizes.fonts.primaryText};
`
const StyledRow = styled.div`
	display: flex;
	justify-content: space-between;
`
const StyledColumn = styled.div`
	flex: 0 1 50%;
	&:last-child{
		margin: 95px 0px 0px 0px;
	}
	&:first-child{
		position: relative;
	}
`
const StyledContactButton = styled(ContactButton)`
	margin: 0px 50px 22px 70px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const StyledContactData = styled(ContactData)`
	margin: 40px 50px 0px 70px;
`
const StyledTelegramIcon = styled(Telegram)`
	margin: 0px 15px 0px 0px;
`
const StyledGitIcon = styled(GitIcon)`
	margin: 0px 15px 0px 0px;
`

const Contacts = () => {
	return (
		<PageTemplate>
			<Wrapper>
				<MainTitle>Contacts</MainTitle>
				<UnderLine />
				<StyledRow>
					<StyledColumn>
						<FormContact />
					</StyledColumn>
					<StyledColumn>
						<StyledContactButton link={"http://t.me/timothytimi4"}> 
							<StyledTelegramIcon/> <div>Chat with Telegram</div>
						</StyledContactButton>
						<StyledContactButton link={"https://github.com/TimTimi4/"}> 
							<StyledGitIcon/> <div>GitHub</div>
						</StyledContactButton>
						<StyledContactData/>
					</StyledColumn>
				</StyledRow>
			</Wrapper>
		</PageTemplate>
	);
}

export default Contacts