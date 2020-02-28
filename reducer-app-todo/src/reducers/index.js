export const initialState = {
    tasks: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "NEW_TODO":
            // spread operator makes a copy of the previous state. we're also adding a new object to tasks
            return {
                ...state, tasks: [...state.tasks, { item: action.payload, completed: false, id: new Date() }]
            };
        case "TOGGLE":
            
            return {
                ...state, tasks: state.tasks.map((task) => (task.id === action.payload ?
                    { ...task, completed: !task.completed } : task))
            };
        case "CLEAR_COMPLETED": {
            return {
                ...state, tasks: state.tasks.filter((task) => !task.completed)
            }
        }
        default:
            return state;
    }
};