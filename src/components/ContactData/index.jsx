import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'


const global = <FontAwesomeIcon icon={faGlobeAsia} />
const letter = <FontAwesomeIcon icon={faEnvelope} />
const mobphone = <FontAwesomeIcon icon={faPhoneSquareAlt} />


const Wrapper = styled.div`
font-size: 18px;
margin: 40px 0px 0px 0px;
letter-spacing: 0.2px;
div{
	margin: 5px 0px 5px 0px;
	span{
		padding: 0px 0px 0px 5px;
	}
}
`

const ContactData = () => {
	return(
		<Wrapper>
			<div>{global}<span>Kyrgyz Republick, Bishkek</span></div>
			<div>{letter}<span>doronin200894@gmail.com</span></div>
			<div>{mobphone}<span>+996 777 44 44 32 </span></div>
		</Wrapper>
	);
}

export default ContactData