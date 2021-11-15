import { ImageContainer, StyledSlider } from './styled'

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  adaptiveHeight: true,
  autoplay: true,
  pauseOnHover: true,
}

const ProjectSlider = ({ slides }) => (
  <StyledSlider {...settings}>
    {
        slides.map((slide) => (
          <div key={slide}>
            <ImageContainer><img src={slide} alt="slides" /></ImageContainer>
          </div>
        ))
      }
  </StyledSlider>
)

export default ProjectSlider
