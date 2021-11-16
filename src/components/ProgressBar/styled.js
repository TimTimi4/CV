import styled from 'styled-components'

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.sizes.blocks.progressbar};
  p {
    margin: 0px 0px 0px 0px;
    font-weight: 700;
    font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.additionalText};
  }
`

export const ProgressBarBorder = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-sizing: border-box;
  border-radius: 6px;
  height: 10px;
  width: ${({ theme }) => theme.sizes.blocks.progressbar};
  margin: 5px 0px 5px 0px;
`

export const ProgressBarInner = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 8px;
  width: ${(props) => props.width};
  border-top-left-radius:6px;
  border-bottom-left-radius:6px;
`
