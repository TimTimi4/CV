import { useEffect, useState } from 'react'
import {
  Wrapper,
  StyledLocalTitle,
  FormField,
  StyledInput,
  StyledTextArea,
  StyledButton,
  ErrorName,
  ErrorEmail,
  ErrorTextArea,
} from './styled'

const FormContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [textDirty, setTextDirty] = useState(false)
  const [error, setError] = useState('the field cannot be empty')
  const [errorEmail, setErrorEmail] = useState('the field cannot be empty')
  const [errorText, setErrorText] = useState('the field cannot be empty')
  const [formValid, setFormValid] = useState(false)

  const blurHandler = (e) => {
    if (e.target.name === 'name') setNameDirty(true)
    else if (e.target.name === 'email') setEmailDirty(true)
    else if (e.target.name === 'text')setTextDirty(true)
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    if (e.target.value === '') {
      setError('the field cannot be empty')
    } else setError('')
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setErrorEmail('invalid Email')
    } else {
      setErrorEmail('')
    }
  }

  const textHandler = (e) => {
    setText(e.target.value)
    if (e.target.value === '') {
      setErrorText('the field cannot be empty')
    } else setErrorText('')
  }

  useEffect(() => {
    if (error || errorEmail || errorText) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [error, errorEmail, errorText])

  return (
    <Wrapper>
      <StyledLocalTitle>You can sent me a letter right from here.</StyledLocalTitle>
      <FormField>
        <StyledInput
          onChange={(e) => nameHandler(e)}
          onBlur={(e) => blurHandler(e)}
          id="name"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          style={{ borderColor: (nameDirty && error) && 'red' }}
        />
        {(nameDirty && error) && <ErrorName style={{ color: 'red' }}>{error}</ErrorName>}
        <StyledInput
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="E-mail"
          style={{ borderColor: (emailDirty && errorEmail) && 'red' }}
        />
        {(emailDirty && errorEmail) && <ErrorEmail style={{ color: 'red' }}>{errorEmail}</ErrorEmail>}
        <StyledInput
          type="text"
          id="theme"
          name="theme"
          placeholder="Subject"
        />
        <StyledTextArea
          name="text"
          id="text"
          onChange={(e) => textHandler(e)}
          onBlur={(e) => blurHandler(e)}
          value={text}
          placeholder="Your message here..."
          style={{ borderColor: (textDirty && errorText) && 'red' }}
        />
        {(textDirty && errorText) && <ErrorTextArea style={{ color: 'red' }}>{errorText}</ErrorTextArea>}
        <StyledButton type="submit" disabled={!formValid}>Send message</StyledButton>
      </FormField>
    </Wrapper>
  )
}

export default FormContact
