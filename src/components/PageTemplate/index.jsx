import { useState } from 'react'
import { Wrapper, Content } from './styled'
import Sidebar from '../Sidebar'
import Header from '../Header'

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
