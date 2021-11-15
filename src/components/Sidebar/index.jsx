import Avatar from '../Avatar'
import Menu from '../Menu'
import { CloseSidebarArea, StyledSidebar } from './styled'

const Sidebar = ({ isOpen, onClose }) => (
  <div>
    <CloseSidebarArea isOpen={isOpen} onClick={onClose} />
    <StyledSidebar isOpen={isOpen}>
      <Avatar />
      <Menu />
    </StyledSidebar>
  </div>
)

export default Sidebar
