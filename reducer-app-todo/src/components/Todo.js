import React from 'react';

const Todo = ({ task, toggleTask }) => {
    //console.log(task)
    if (task) {
        return <li
            className={task.completed ? 'completed' : ''}
            onClick={() => toggleTask(task.id)}>{task.item}</li>;
    } else return <h1>Loading..</h1>

}

export default Todo;