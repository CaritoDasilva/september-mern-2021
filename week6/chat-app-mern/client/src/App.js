import React, { useState, useEffect } from 'react';
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
import CreateProfile from './views/CreateProfile';
import io from 'socket.io-client';

function App() {
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    socket.on("from-server", data => console.log('data', data));
  }, [socket])

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
          <Route exact path="/create-profile/:id">
            <CreateProfile/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
