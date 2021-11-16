import styled from 'styled-components'
import Subtitle from '../SubTitle'

export const Text = styled.div`
  margin: 0px 15px 0px 10px; 
  p{
    margin: 0px 0px 0px 0px;
    font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
    &:nth-child(2){
      font-weight: 700;
    }
    &:last-child{
      margin: 6px 0px 0px 0px;
      color:${({ theme }) => theme.colors.secondaryText};
      font-weight: 700;
    }
  }
`
export const StyledSubtitle = styled(Subtitle)`
  margin: 40px 0px 20px 0px;
`
