import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
	margin: 50px 20px 100px 20px;
	position: relative;
	.slick-track{
		display: flex;
	}
	.slick-arrow{
		position: absolute;
		z-index: 10;
		top: 50%;
	}
	.slick-arrow.slick-prev{
		left: 0;
		&::before{
			color: #777676;
			font-size: 30px;
		}
	}
	.slick-arrow.slick-next{
		right: 10px;
		&::before{
			color: #777676;
			font-size: 30px;
		}
	}
	.slick-dots{
		position: absolute;
		bottom: -50px;
	}
	.slick-dots li{
		border-radius: 50%;
		width: 7px;
		height: 7px;
		border: 2px solid #777676;
		margin: 0px 7px 0px 7px;
	}
	.slick-dots li.slick-active{
		background-color: #777676;
		border-radius: 50%;
		width: 7px;
		height: 7px;
	}
	.slick-dots li button{
		&::before{
			font-size: 0;
		}
	}
`

const Img = styled.div`
	margin: 0 auto;
	max-width: 60%;
	padding: 0px 0px 35% 0px;
	overflow: hidden;
	position: relative;
	border: 1px solid #777676;
	img{
		position: absolute;
		-o-object-fit: cover;
		object-fit: cover;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		}
`

const ProjSlider = ({ children }) => {
	const settings = {
			dots: true,
			arrows:true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			adaptiveHeight:true,
			autoplay:true,
			pauseOnHover:true,
		};
	return (
		<StyledSlider {...settings}>
			{
				children.slides.map(slide => (
					<div>
						<Img><img src={slide} alt="#" /></Img> 
					</div>
				))
			}
		</StyledSlider>
	)
}

export default ProjSlider
