import React from 'react';
import './App.css';

import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <h1> Your To-Do List</h1>
     <TodoForm />
    </div>
  );
}

export default App;
