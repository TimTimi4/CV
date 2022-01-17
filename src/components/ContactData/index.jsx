import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from './styled'

const global = <FontAwesomeIcon icon={faGlobeAsia} />
const letter = <FontAwesomeIcon icon={faEnvelope} />
const mobphone = <FontAwesomeIcon icon={faPhoneSquareAlt} />

const ContactData = ({ className }) => (
  <Wrapper className={className}>
    <div>{global}<span>Kyrgyz Republic, Bishkek</span></div>
    <div>{letter}<span>doronin200894@gmail.com</span></div>
    <div>{mobphone}<span>+996 777 44 44 32 </span></div>
  </Wrapper>
)

export default ContactData
