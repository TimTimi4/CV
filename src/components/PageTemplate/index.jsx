import styled from 'styled-components'
import Sidebar from '../Sidebar'
import Header from '../Header'

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  flex: 0 1 100%;
  margin: 0px 0px 0px ${({ theme }) => theme.sizes.blocks.sidebar};
`

const PageTemplate = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <Header />
    <Content>{children}</Content>
  </Wrapper>

)

export default PageTemplate
