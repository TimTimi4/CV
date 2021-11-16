import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0px 0px 50px 84px;
  @media ${({ theme }) => theme.media.tablet} {
    margin: 0px 0px 40px 20px;
  }
`

export const Profile = styled.div`
  margin: 33px 15px 0px 10px;
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
  max-width: 550px;
`
