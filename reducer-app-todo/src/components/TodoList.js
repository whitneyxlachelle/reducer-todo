import React from 'react';
import Todo from './Todo'

const TodoList = ({ toggleTask, tasks }) => {
    //console.log(tasks)

    if (tasks) {
        return (
            <div className="todo-list">
                <ul>
                    {tasks.map(task => {
                        return <Todo key={task.id} toggleTask={toggleTask} task={task} />;
                    })}
                </ul>
            </div>
        )
    } else return <h1>Loading...</h1>
};
export default TodoList;

