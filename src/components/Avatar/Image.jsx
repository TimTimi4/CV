import styled from 'styled-components'
import photo from '../../img/photo.jpg'

const Wrapper = styled.div`
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
const PrimaryCircle = styled(Circle)`
  right: -3%;
  top: -11%;
  width: 32%;
  height: 32%;
  background: ${(props) => props.theme.colors.primary};
`
const SecondaryCircle = styled(Circle)`
  left: -11%;
  top: 50%;
  width: 20%;
  height: 20%;
  background: ${(props) => props.theme.colors.secondary};
`

const AvatarImage = () => (
  <Wrapper>
    <PrimaryCircle />
    <SecondaryCircle />
    <img src={photo} alt="Timur Doronin" />
  </Wrapper>
)

export default AvatarImage
