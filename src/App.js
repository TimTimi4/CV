import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Theme from './styles/theme';
import About from './pages/About/index.jsx';
import Resume from './pages/Resume/index.jsx';
import Projects from './pages/Projects/index.jsx';
import Contacts from './pages/Contacts/index.jsx';

function App() {
  return (
		<Theme>
			<BrowserRouter>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contacts" component={Contacts} exact />
        </Switch>
      </BrowserRouter>
		</Theme>
  )
}

export default App;
