import styled from 'styled-components'
import Subtitle from '../SubTitle'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px 0px 0px;
  max-width: ${({ theme }) => theme.sizes.blocks.primary};
  @media ${({ theme }) => theme.media.mobileL} {
    flex-direction: column;
  }
`
export const ImageContainer = styled.div`
  flex: 0 1 35%;
  padding: 0px 0px 18% 0px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  @media ${({ theme }) => theme.media.mobileL} {
    padding: 0px 0px 30% 0px;
    max-width: 230px;
  }
  @media ${({ theme }) => theme.media.mobileS} {
    padding: 0px 0px 40% 0px;
    max-width: 230px;
  }
  img{
    position: absolute;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`
export const Description = styled.div`
  flex: 0 1 58%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
  @media ${({ theme }) => theme.media.mobileL} {
    flex: 0 1 100%;
  }
`
export const StyledSubtitle = styled(Subtitle)`
  &:hover{
    transition: all 0.2s ease 0s;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
