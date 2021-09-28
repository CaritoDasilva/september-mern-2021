import './App.css';
import React, { useState } from 'react';
import Login from './views/Login';

function App() {
  const [users, setUsers] = useState([])
  return (
    <div className="App">
      <Login users={users} setUsers={setUsers} />
      {users.length > 0 && users.map((user, index) => (
        <div key={index}>
          <h1>{user.userName}</h1>
          <h3>{user.email}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
