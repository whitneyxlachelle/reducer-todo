import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers';

import TodoList from './TodoList';

const TodoForm = () => {

    const [newTodoText, setNewTodoText] = useState("");
    const [state, dispatch] = useReducer(todoReducer, initialState);
    // const [completed, setCompleted] = useState(false);

    const handleChanges = event => {
        setNewTodoText(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'NEW_TODO', payload: newTodoText });
        setNewTodoText("");
    }
    //console.log("I am state", state);
    return (
        <div>
            <form>
                <input
                    className="add-todo"
                    type="text"
                    name="newTodoText"
                    value={newTodoText}
                    onChange={handleChanges}
                />
                <button onClick={handleSubmit}>
                    Add!
                </button>
                <button>
                    Completed
                </button>
            </form>
            
            <TodoList tasks={state.tasks}/>
        </div>
    );
};

export default TodoForm;