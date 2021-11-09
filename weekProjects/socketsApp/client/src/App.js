import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import io from 'socket.io-client';


function App() {
  const [socket] = useState(() => io(':8000'));
  const studentsSaludos = 'Ahora saludamos desde el cliente! :)';
  useEffect(() => {
    socket.on("from-server", data => console.log(data));
    socket.emit("from-client", studentsSaludos);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
