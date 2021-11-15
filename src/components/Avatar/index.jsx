import styled from 'styled-components'
import Image from './Image'

const Wrapper = styled.div`
  margin: 65px auto 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Name = styled.div`
  margin-top: 9px;
  font-size: ${({ theme }) => theme.sizes.fonts.subtitle};
  font-family: ${({ theme }) => theme.fonts.title};
`
const Job = styled.div`
  font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
`

const Avatar = () => (
  <Wrapper>
    <Image />
    <Name>Timur Doronin</Name>
    <Job>Front-end Developer</Job>
  </Wrapper>
)

export default Avatar
