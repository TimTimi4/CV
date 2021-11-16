import styled from 'styled-components'

export const StyledHeader = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.sidebarBg};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: none;
  text-align: center;
  @media ${({ theme }) => theme.media.tablet} {
    display: block;
  }
`
export const Name = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.fonts.subtitle};
  font-family: ${({ theme }) => theme.fonts.title};
`
export const Job = styled.div`
  font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
`
