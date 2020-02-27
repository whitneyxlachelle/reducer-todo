import React from 'react';

const TodoList = props => {
    //console.log(props);
    return (
        <div className="todo-list">
            {props.tasks.map(task => {
              return <p key={task.id}>{task.item}</p>;
            })}
        </div>
    );
};
export default TodoList;

