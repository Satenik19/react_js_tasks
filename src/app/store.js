import { combineReducers } from 'redux';
const { createStore } = require('redux');
import { currentUserReducer, initialCurrentUser } from '../features/currentUser/currentUserSlice';
import { initialTodos, todosReducer } from '../features/todos/todosSlice';


const store = createStore(combineReducers({
    todos: todosReducer,
    currentUser: currentUserReducer
}), {
    currentUser: initialCurrentUser,
    friends: [],
    posts: [],
    todos: initialTodos
});

export default store;