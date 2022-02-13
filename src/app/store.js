import { currentUserReducer, initialCurrentUser } from '../features/currentUser/currentUserSlice';
import { initialTodos, todosReducer } from '../features/todos/todosSlice';
import { applyMiddleware, combineReducers } from 'redux';
const { createStore } = require('redux');

function logger1(store) {
    return function(next) {
        return function(action) {
            // setTimeout(() => {
            //     next(action);
            // }, 2000);
            next(action);
        }
    }
}

const logger2 = (store) => (next) => (action) => {
    return next(action);
}
const store = createStore(combineReducers({
    todos: todosReducer,
    currentUser: currentUserReducer
}), {
    currentUser: initialCurrentUser,
    // friends: [],
    // posts: [],
    todos: initialTodos
}, applyMiddleware(logger1, logger2));

export default store;