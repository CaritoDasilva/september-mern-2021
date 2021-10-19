import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './views/Login';
import Users from './views/Users';
import Profile from './views/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/users">
            <Users/>
          </Route>
          <Route exact path="/user/:id">
            <Profile/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
