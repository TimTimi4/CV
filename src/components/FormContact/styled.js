import styled from 'styled-components'
import Button from '../Button'

export const Wrapper = styled.div`
  margin: 33px 0px 0px 0px;
`
export const StyledLocalTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
  font-weight: 400;
  margin: 0px 0px 0px 0px;
`
export const FormField = styled.form`
  display:flex;
  flex-direction:column;
  max-width: ${({ theme }) => theme.sizes.blocks.formInput};
`
export const StyledInput = styled.input`
  margin: 11px 0px 11px 0px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  height: 34px;
  border-radius: 6px;
  padding: 0px 0px 0px 14px;
  font-style: italic;
  &:first-child{
    margin: 44px 0px 11px 0px;
  }
  &:focus-visible{
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
  &::placeholder{
    font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
  }
`
export const StyledTextArea = styled.textarea`
  max-width: ${({ theme }) => theme.sizes.blocks.formTextarea};
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  margin: 11px 0px 0px 0px;
  padding: 10px 0px 0px 14px;
  font-style: italic;
  height: 139px;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.primary};
  &:focus-visible{
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
    &::placeholder{
    font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
  }
`
export const StyledButton = styled(Button)`
  margin: 22px 0px 0px 0px;
`
export const ErrorName = styled.div`
position: absolute;
top: 28%;
left: 5%;
font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
`
export const ErrorEmail = styled.div`
position: absolute;
top: 40%;
left: 5%;
font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
`
export const ErrorTextArea = styled.div`
position: absolute;
bottom: 8%;
left: 5%;
font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
`
