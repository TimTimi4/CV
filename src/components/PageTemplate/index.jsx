import styled from 'styled-components'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  flex: 0 1 100%;
  margin: 0px 0px 0px ${({ theme }) => theme.sizes.blocks.sidebar};
`

const PageTemplate = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const openSidebar = () => setSidebarOpen(true)
  const closeSidebar = () => setSidebarOpen(false)
  return (
    <Wrapper>
      <Header onBurgerClick={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default PageTemplate
