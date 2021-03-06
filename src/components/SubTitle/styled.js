import styled from 'styled-components'

export const StyledSubtitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.fonts.subtitle};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryText};
`
