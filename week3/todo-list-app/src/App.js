import React, { useState } from 'react';
import './App.scss';
import { ListProvider } from './contexts/ListContext';
import ToDoForm from './views/ToDoForm';
import ToDoList from './views/ToDoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <ListProvider>
        <ToDoForm />
        <ToDoList/>
      </ListProvider>
      
    </div>
  );
}

export default App;
