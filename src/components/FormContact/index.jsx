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
	border: 1px solid #A4A4A4;
	height: 20px;
	&:focus-visible{
		border: 2px solid #51C0DA;
		outline: none;
	}
`
const StyledTextArea = styled.textarea`
	max-width: 450px;
	border: 1px solid #A4A4A4;
	margin: 5px 0px 5px 0px;
	height: 100px;
	&:focus-visible{
		border: 2px solid #51C0DA;
		outline: none;
	}
`

const FormContact = () => {
	return(
		<Wrapper>
			<StyledLocalTitle>You can sent me a letter right from here.</StyledLocalTitle>
			<FormField>
				<label htmlFor="name">Name<StyledInput id="name" type="text" name="name"></StyledInput></label> 
				<label htmlFor="email">E-mail<StyledInput type="email" id="email" name="email"></StyledInput></label> 
				<label htmlFor="theme">Theme<StyledInput type="text" id="theme" name="theme"></StyledInput></label> 
				<label htmlFor="message">Message<StyledTextArea name="text" id="message"></StyledTextArea></label>
				<Button>Send</Button>
			</FormField>
		</Wrapper>
	);
}

export default FormContact