import styled from 'styled-components'
import ContactData from '../../components/ContactData'
import Telegram from '../../components/Icons/Telegram'
import GitIcon from '../../components/Icons/Git'
import ContactButton from '../../components/ContactButton'

export const Wrapper = styled.div`
  margin: 0px 0px 50px 84px;
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
`
export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledColumn = styled.div`
  flex: 0 1 50%;
  &:last-child{
    margin: 95px 60px 0px 0px;
  }
  &:first-child{
    position: relative;
  }
`
export const StyledContactButton = styled(ContactButton)`
  margin: 0px 50px 22px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledContactData = styled(ContactData)`
  margin: 40px 50px 0px 70px;
`
export const StyledTelegramIcon = styled(Telegram)`
  margin: 0px 15px 0px 0px;
`
export const StyledGitIcon = styled(GitIcon)`
  margin: 0px 15px 0px 0px;
`