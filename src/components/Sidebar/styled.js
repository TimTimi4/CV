import styled from 'styled-components'

export const CloseSidebarArea = styled.div`
  background-color: #000;
  position: fixed;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0.6;
  z-index: 4;
  @media ${({ theme }) => theme.media.tablet} {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`

export const StyledSidebar = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sidebarBg};
  max-width: ${({ theme }) => theme.sizes.blocks.sidebar};
  display: flex;
  z-index: 5;
  flex-direction: column;
  align-items: center;
  transition: all .4s;
  will-change: transform;
  @media ${({ theme }) => theme.media.tablet} {
    transform: translateX(${({ isOpen }) => (isOpen ? 0 : '-100%')});
  }
`
