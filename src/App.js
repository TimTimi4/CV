import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Theme from './styles/theme';
import About from './pages/About';
import Resume from './pages/Resume'
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectInner from './pages/ProjectInner';


function App() {
  return (
		<Theme>
			<BrowserRouter>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/projects/:projectId" component={ProjectInner} exact />
          <Route path="/contacts" component={Contacts} exact />
        </Switch>
      </BrowserRouter>
		</Theme>
  )
}

export default App;
