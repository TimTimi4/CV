import { useState } from 'react/cjs/react.development'
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
    background-color: ${({ theme }) => theme.colors.primary};
    &:first-child {
      top: 0px;
    }
    &:last-child {
      top: auto;
      bottom: 0px;
    }
  }
  &.active {
    span {
      transform: scale(0);
      &:first-child {
        transform: rotate(45deg);
        top: 7px;
      }
      &:last-child {
        transform: rotate(-45deg);
        bottom: 7px;
      }
    }
  }
`
const Burger = () => {
  const [active, setActive] = useState('')

  const handleClick = (e) => {
    setActive('active')
    if (e.target.classList.contains('active')) {
      setActive('')
    }
  }
  return (
    <StyledBurger onClick={(e) => handleClick(e)} className={active}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export default Burger
