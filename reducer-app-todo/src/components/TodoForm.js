import React, { useState } from 'react';

const TodoForm = ({ addTodo, clearCompleted }) => {

    const [newTodoText, setNewTodoText] = useState("");

    const handleChanges = event => {
        setNewTodoText(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        addTodo(newTodoText);
        setNewTodoText("");
    };

    const clearCompletedHandler = event => {
        event.preventDefault();
        clearCompleted();
    };
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
                <button onClick={(event) => handleSubmit(event)}>
                    Add!
                </button>
                <button onClick={(event) => clearCompletedHandler(event)}>
                    Completed
                </button>
            </form>
        </div>
    );
};

export default TodoForm;