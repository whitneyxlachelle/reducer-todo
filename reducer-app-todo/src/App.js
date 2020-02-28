import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { todoReducer, initialState } from './reducers/index';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleTask = (id) => {
    dispatch({
      type: "TOGGLE",
      payload: id
    })
  }
  const addTodo = item => {
    dispatch({ type: 'NEW_TODO', payload: item })
  }
  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED"
    })
  }

  return (
    <div className="App">
      <h1> Your To-Do List</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList tasks={state.tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
