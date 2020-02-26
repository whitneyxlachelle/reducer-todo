export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "NEW_TODO":
            return { ...state, item: action.payload, completed: false, id: new Date() };
        default:
            return state;
    }
}