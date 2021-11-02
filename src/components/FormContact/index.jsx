import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
	margin: 40px 0px 0px 0px;
	label{
		display: flex;
		flex-direction: column;
		color: #A4A4A4;
		font-size: 12px;
	}
`

const StyledLocalTitle = styled.h3`
	font-size: 14px;
	font-weight: 400;
`

const FormField = styled.form`
	display:flex;
	flex-direction:column;
	max-width: 350px;
`
const StyledInput = styled.input`
	margin: 5px 0px 5px 0px;
	border: 1px solid rgba(254, 129, 88);
	height: 20px;
	&:focus-visible{
		border: 1px solid #51C0DA;
		outline: none;
	}
`
const StyledTextArea = styled.textarea`
	max-width: 450px;
	border: 1px solid rgba(254, 129, 88);
	margin: 5px 0px 5px 0px;
	height: 100px;
	font-family: ${props => props.theme.fonts.primary};
	&:focus-visible{
		border: 1px solid #51C0DA;
		outline: none;
	}
`

const FormContact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [text, setText] = useState('')
	const [nameDirty, setNameDirty] = useState(false)
	const [emailDirty, setEmailDirty] = useState(false)
	const [textDirty, setTextDirty] = useState(false)
	const [error, setError] = useState('The field cannot be empty')
	const [errorEmail, setErrorEmail] = useState('Incorrect Email')
	const [errorText, setErrorText] = useState('The field cannot be empty')

const blurHandler = (e) => {
	if (e.target.name === "name") setNameDirty(true)
	else if (e.target.name === "email") setEmailDirty(true)
	else if (e.target.name === "text")setTextDirty(true)
}

const nameHandler = (e) => {
	setName(e.target.value)
	if (e.target.value == ""){
		setError('The field cannot be empty')
	} 
	else setError('')
}

const emailHandler = (e) => {
	setEmail(e.target.value)
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!re.test(String(e.target.value).toLowerCase())){
		setErrorEmail('Incorrect Email')
	}
	else if (e.target.value == "") {
		setError('The field cannot be empty')
	}
	else setEmail('')
}

const textHandler = (e) => {
	setText(e.target.value)
	if (e.target.value == ""){
		setErrorText('The field cannot be empty')
	} 
	else setErrorText('')
}

	return(
		<Wrapper>
			<StyledLocalTitle>You can sent me a letter right from here.</StyledLocalTitle>
			<FormField>
				{(nameDirty && error) && <div style={{color: 'red'}}>{error}</div>}
				<label htmlFor="name">Name
					<StyledInput onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} id="name" type="text" name="name" value={name}></StyledInput>
				</label> 
				{(emailDirty && errorEmail ) && <div style={{color: 'red'}}>{errorEmail}</div>}
				<label htmlFor="email">E-mail
					<StyledInput onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" id="email" name="email" value={email}></StyledInput>
				</label> 
				<label htmlFor="theme">Theme
					<StyledInput type="text" id="theme" name="theme"></StyledInput>
				</label> 
				{(textDirty && errorText) && <div style={{color: 'red'}}>{errorText}</div>}
				<label htmlFor="message">Message
					<StyledTextArea name="text" id="text" onChange={e => textHandler(e)} onBlur={e => blurHandler(e)}value={text}></StyledTextArea>
				</label>
				<Button type="submit">Send</Button>
			</FormField>
		</Wrapper>
	);
}

export default FormContact