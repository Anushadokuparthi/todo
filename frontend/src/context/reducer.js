import { ADD_TODO,REMOVE_TODO,EDIT_TODO } from "./action.types";
export const TodoReducer = (state,action) => {
    switch (action.type){
        case ADD_TODO:
            return [...state,action.payload];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case EDIT_TODO:
            return state;
        default:
            return state;
    }
}