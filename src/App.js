import './App.css';
import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';
//
//    "lint": "eslint src/**/*.js"

function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    return [
        state, (action) => {
            const newState = reducer(state, action);
            setState(newState);
        }
    ]
}
function reducer(state, action) {
    if (action.type === 'add') {
        return [
            ...state,
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false
            }
        ]
    } else if (action.type === 'delete') {
        return state.filter(t => t.id !== action.payload.id)
    }

    return state;
}

function App() {
    const [todos, dispatch] = useReducer(reducer,[
        {
            id: Math.random(),
            text: "Learn Java",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn JS",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn PHP",
            isCompleted: false
        }
    ]);
    return (
        <div className="App">
            <TodoForm onAdd={(text) => {
                dispatch({
                    type: 'add',
                    payload: {
                        text,
                    }
                })
            }}/>
            <TodoList todos={todos}
                      onChange={(newTodo) => {
                          // setTodos(todos.map(todo => {
                          //     if (todo.id === newTodo.id) {
                          //         return newTodo;
                          //     }
                          //     return todo;
                          // }));
                      }}
                      onDelete={(todo) => {
                          dispatch({
                              type: 'delete',
                              payload: {
                                  id: todo.id,
                              }
                          })
                          // setTodos(todos.filter(t => t.id !== todo.id));
                      }}/>
            <TodoFooter todos={todos} onClearCompleted={() => {

                // setTodos(todos.filter(todo => !todo.isCompleted));
            }}/>
        </div>
    );
}

export default App;
