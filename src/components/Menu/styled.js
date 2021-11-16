import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.div`
  margin: 51px auto 0 auto;
`
export const StyledButton = styled(Button)`
  &:first-child{
    margin: 0px 0px ${({ theme }) => theme.sizes.elems.menuButtonMargin} 0px;
  }
`
