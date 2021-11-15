import styled from 'styled-components'
import Slider from 'react-slick'

export const StyledSlider = styled(Slider)`
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
      color: ${({ theme }) => theme.colors.slider.arrow};
      font-size: 30px;
    }
  }
  .slick-arrow.slick-next{
    right: 10px;
    &::before{
      color: ${({ theme }) => theme.colors.slider.arrow};
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
    border: 2px solid ${({ theme }) => theme.colors.slider.dots};

    margin: 0px 7px 0px 7px;
  }
  .slick-dots li.slick-active{
    background-color: ${({ theme }) => theme.colors.slider.dots};
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

export const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 60%;
  padding: 0px 0px 35% 0px;
  overflow: hidden;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
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
