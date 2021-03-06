import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0px 0px 50px 84px;
  @media ${({ theme }) => theme.media.laptop} {
    margin: 0px 0px 50px 60px;
  }
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
  @media ${({ theme }) => theme.media.tablet} {
    margin: 0px 0px 40px 20px;
  }
  @media ${({ theme }) => theme.media.mobileL} {
    margin: 0px 20px 40px 20px;
  }
`
