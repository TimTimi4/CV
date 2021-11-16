import styled from 'styled-components'

export const WrapperImg = styled.div`
  position: relative;
  img {
    width: ${({ theme }) => theme.sizes.blocks.avatar};
    height: ${({ theme }) => theme.sizes.blocks.avatar};
    background-color: #fff;
    object-fit: contain;
    border-radius: 50%;
  }
`
const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
`
export const PrimaryCircle = styled(Circle)`
  right: -3%;
  top: -11%;
  width: 32%;
  height: 32%;
  background: ${({ theme }) => theme.colors.primary};
`
export const SecondaryCircle = styled(Circle)`
  left: -11%;
  top: 50%;
  width: 20%;
  height: 20%;
  background: ${({ theme }) => theme.colors.secondary};
`
export const Wrapper = styled.div`
  margin: 65px auto 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const Name = styled.div`
  margin-top: 9px;
  font-size: ${({ theme }) => theme.sizes.fonts.subtitle};
  font-family: ${({ theme }) => theme.fonts.title};
`
export const Job = styled.div`
  font-size: ${({ theme }) => theme.sizes.fonts.secondaryText};
`
