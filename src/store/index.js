import { combineReducers, createStore } from "redux";
import todosReducer from './reducers/todos.reducer';

const rootReducer = combineReducers({
    todos: todosReducer
});

export const store = createStore(
    rootReducer
);

export default store;