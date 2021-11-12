import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Login from './views/Login';
import Users from './views/Users';
import Profile from './views/Profile';
import CreateProfile from './views/CreateProfile';
import SocketProvider from './contexts/SocketContext';

function App() {
  //Todo:
  //Crear contexto para el usuario
  //Crear login 
  //Agregar funcionalidad para cuando se desloguee se desconecte del socket!!!!

  // const logout = async () => {
  //   try {
  //         await axios.put(`http://localhost:8080/api/users/${id}`, { isOnline: false })

  //       } catch(err) {
  //           return err;
  //       }
  // }
  
  return (
    <div className="App">
      {/* <button onClick={logout}>Logout</button> */}
      <SocketProvider>
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
      </SocketProvider>
      
    </div>
  );
}

export default App;
