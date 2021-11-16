import photo from '../../img/photo.jpg'
import { WrapperImg, PrimaryCircle, SecondaryCircle } from './styled'

const AvatarImage = () => (
  <WrapperImg>
    <PrimaryCircle />
    <SecondaryCircle />
    <img src={photo} alt="Timur Doronin" />
  </WrapperImg>
)

export default AvatarImage
