import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`
export const Content = styled.div`
  flex: 0 1 100%;
  //slick-slider-work next-line
  min-width: 0;
  margin: 0px 0px 0px ${({ theme }) => theme.sizes.blocks.sidebar};
`
