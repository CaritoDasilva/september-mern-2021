import React, { useState, useEffect, useContext } from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import axios from 'axios';
import Login from './views/Login';
import Users from './views/Users';
import Profile from './views/Profile';
import CreateProfile from './views/CreateProfile';
import SocketProvider from './contexts/SocketContext';
import LogindAndRegister from './views/LoginAndRegister';
import { AuthContext, AuthProvider } from './contexts/AuthContext';

function App() {
  const { isLogued, setIsLogued, user, setUser } = useContext(AuthContext);
  const history = useHistory();
  //Todo:
  //Crear contexto para el usuario
  //Crear login 
  //Agregar funcionalidad para cuando se desloguee se desconecte del socket!!!!

  const logout = async () => {
    try {
          await axios.put(`http://localhost:8080/api/users/${user?.id}`, { isOnline: false })
          setIsLogued(false);
          setUser();
          history.push('/login')

        } catch(err) {
            return err;
        }
  }
  
  return (
    <div className="App">
      <AuthProvider>
        <SocketProvider>
          <Router>
            <button onClick={logout}>Logout</button>
            <Switch>
              <Route exact path="/login">
                <LogindAndRegister/>
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
        </SocketProvider>
      </AuthProvider>
      
    </div>
  );
}

export default App;
