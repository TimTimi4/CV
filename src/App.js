import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Theme from './styles/theme';
import About from './pages/About';
import Resume from './pages/Resume'
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import PlugSpot from './project-pages/PlugSpot';
import TodoList from './project-pages/TodoList';
import Luxtrader from './project-pages/Luxtrader';
import AOD from './project-pages/AOD';


function App() {
  return (
		<Theme>
			<BrowserRouter>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/projects/plugspot" component={PlugSpot} exact />
          <Route path="/projects/todolist" component={TodoList} exact />
          <Route path="/projects/luxtrader" component={Luxtrader} exact />
          <Route path="/projects/aod" component={AOD} exact />
          <Route path="/contacts" component={Contacts} exact />
        </Switch>
      </BrowserRouter>
		</Theme>
  )
}

export default App;
