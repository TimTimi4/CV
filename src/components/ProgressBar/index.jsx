import styled from "styled-components";

const Text = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: ${props=>props.theme.sizes.blocks.progressbar};
	p {
		margin: 0px 0px 0px 0px;
		font-weight: 700;
		font-size: ${props=>props.theme.sizes.fonts.secondaryText};
		text-align: center;
		text-transform: capitalize;
		color: ${props=>props.theme.colors.additionalText};
	}
`

const ProgressBarBorder = styled.div`
	border: 1px solid ${props=>props.theme.colors.secondary};
	box-sizing: border-box;
	border-radius: 6px;
	height: 10px;
	width: ${props=>props.theme.sizes.blocks.progressbar};
	margin: 5px 0px 5px 0px;
`

const ProgressBarInner = styled.div`
	background-color: ${props=>props.theme.colors.secondary};
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