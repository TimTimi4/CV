import styled from 'styled-components'
import MainTitle from '../../components/MainTitle'

export const Wrapper = styled.div`
  margin: 0px 0px 50px 84px;
  font-size: ${({ theme }) => theme.sizes.fonts.primaryText};
  @media ${({ theme }) => theme.media.tablet} {
    margin: 0px 0px 40px 20px;
  }
`
export const StyledMainTitle = styled(MainTitle)`
  margin: 91px 0px  0px;
`

export const FirstTextBlock = styled.div`
  max-width: ${({ theme }) => theme.sizes.blocks.secondary};
  font-weight: 700;
  margin: 20px 15px 0px 10px;
`

export const SecondTextBlock = styled.div`
  max-width: ${({ theme }) => theme.sizes.blocks.secondary};
  margin: 20px 15px 0px 10px;
  p {
    margin: 0px 0px 0px 0px;
  }
  ul{
    padding: 0px 0px 0px 20px;
    margin: 0px 0px 0px 0px;
    p{
      color: ${({ theme }) => theme.colors.secondaryText};
    }
  }
`

export const ThirdTextBlock = styled.div`
  max-width: ${({ theme }) => theme.sizes.blocks.secondary};
  margin: 20px 15px 0px 10px;
  p{
    margin: 0px 0px 0px 0px;
  }
`
