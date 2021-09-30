import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CharactersList from './views/CharactersList';
import CharacterDetail from './views/CharacterDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/lista-personajes">Lista de Personajes</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/lista-personajes">
            <CharactersList />
          </Route>
          <Route exact path="/personaje/:id/:string">
            <CharacterDetail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
