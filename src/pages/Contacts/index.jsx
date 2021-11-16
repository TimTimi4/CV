import PageTemplate from '../../components/PageTemplate'
import MainTitle from '../../components/MainTitle'
import UnderLine from '../../components/Underline'
import FormContact from '../../components/FormContact'
import {
  Wrapper,
  StyledRow,
  StyledColumn,
  StyledContactButton,
  StyledContactData,
  StyledTelegramIcon,
  StyledGitIcon,
} from './styled'

const Contacts = () => (
  <PageTemplate>
    <Wrapper>
      <MainTitle>Contacts</MainTitle>
      <UnderLine />
      <StyledRow>
        <StyledColumn>
          <FormContact />
        </StyledColumn>
        <StyledColumn>
          <StyledContactButton link="http://t.me/timothytimi4">
            <StyledTelegramIcon />
            <div>Chat with Telegram</div>
          </StyledContactButton>
          <StyledContactButton link="https://github.com/TimTimi4/">
            <StyledGitIcon />
            <div>GitHub</div>
          </StyledContactButton>
          <StyledContactData />
        </StyledColumn>
      </StyledRow>
    </Wrapper>
  </PageTemplate>
)

export default Contacts
