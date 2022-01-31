import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Theme from './styles/theme'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import ProjectInner from './pages/ProjectInner'
import NotFoundPage from './components/NotFoundPage'

const App = () => (
  <Theme>
    <BrowserRouter basename="CV">
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/projects/:projectId" component={ProjectInner} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </Theme>
)

export default App
