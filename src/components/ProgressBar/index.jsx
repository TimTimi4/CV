import styled from "styled-components";

const Text = styled.div`
display: flex;
justify-content: space-between;
max-width: 380px;
p {
	margin: 0px 0px 0px 0px;
	font-weight: 700;
	font-size: 12px;
	text-align: center;
	text-transform: capitalize;
	color: #676767;
}
`

const ProgressBarBorder = styled.div`
border: 1px solid #51C0DA;
box-sizing: border-box;
border-radius: 6px;
height: 10px;
width: 380px;
margin: 5px 0px 5px 0px;
`

const ProgressBarInner = styled.div`
background-color: #51C0DA;
height: 8px;
width: ${props => props.width};
border-top-left-radius:6px;
border-bottom-left-radius:6px;
`


const ProgressBar = ({text, width}) => {
	return (
		<div>
			<Text>
				<p>{text}</p>
				<p>{width}</p>
			</Text>
			<ProgressBarBorder>
				<ProgressBarInner width={width}></ProgressBarInner>
			</ProgressBarBorder>
		</div>
		
	)
}
export default ProgressBar