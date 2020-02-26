// import React, { useState, useReducer } from 'react';
// import { initialState, todoReducer } from '../reducers';

// const Todo = () => {

//     const [newTodoText, setNewTodoText] = useState("");

//     const [state, dispatch] = useReducer(todoReducer, initialState);
//     const [completed, setCompleted] = useState(false);
    
    
//     const handleChanges = event => {
//         setNewTodoText(event.target.value);
//     };

//     const newTodo = event => {
//         dispatch({ type: 'NEW_TODO', payload: newTodoText });
//     }

//     const onToggle = 


//     return (
//         <div>

//             <h2>{state.item}</h2>

//             <input
//                 className="add-todo"
//                 type="text"
//                 name="newTodoText"
//                 value={newTodoText}
//                 onChange={handleChanges}
//             />
//             <button type="button" onClick={newTodo}>Add!</button>
//         </div>
//     )
// }

// export default Todo;