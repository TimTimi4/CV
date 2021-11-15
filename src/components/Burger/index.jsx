import styled from 'styled-components'

const StyledBurger = styled.div`
  width: 27px;
  height: 16px;
  cursor: pointer;
  position: relative;
  top: 20px;
  left: 30px;
  span {
    transition: all 0.3s ease 0s;
    top: 7px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.burger};
    &:first-child {
      top: 0px;
    }
    &:last-child {
      top: auto;
      bottom: 0px;
    }
  }
`
const Burger = ({ onClick }) => (
  <StyledBurger onClick={onClick}>
    <span />
    <span />
    <span />
  </StyledBurger>
)

export default Burger
